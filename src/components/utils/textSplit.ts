type SplitResult = {
  words: HTMLElement[];
  chars: HTMLElement[];
  revert: () => void;
};

type SplitOptions = {
  words?: boolean;
  chars?: boolean;
  lines?: boolean;
  linesClass?: string;
};

const originalHtml = new WeakMap<HTMLElement, string>();

function saveOriginal(el: HTMLElement) {
  if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
}

function getLineBuckets(nodes: HTMLElement[]) {
  const buckets = new Map<number, HTMLElement[]>();
  nodes.forEach((node) => {
    const top = node.offsetTop;
    const list = buckets.get(top);
    if (list) list.push(node);
    else buckets.set(top, [node]);
  });
  return [...buckets.entries()].sort((a, b) => a[0] - b[0]).map(([, v]) => v);
}

function wrapLines(root: HTMLElement, inlineNodes: HTMLElement[], linesClass: string) {
  const buckets = getLineBuckets(inlineNodes);
  buckets.forEach((lineNodes) => {
    const wrapper = document.createElement("span");
    wrapper.className = linesClass;
    wrapper.style.display = "block";
    const first = lineNodes[0];
    first.parentNode?.insertBefore(wrapper, first);
    lineNodes.forEach((n) => wrapper.appendChild(n));
  });

  return Array.from(root.querySelectorAll(`.${linesClass}`)) as HTMLElement[];
}

function splitIntoWords(root: HTMLElement) {
  const text = root.textContent ?? "";
  root.textContent = "";

  const wordSpans: HTMLElement[] = [];
  const parts = text.matchAll(/(\S+)(\s*)/g);
  for (const match of parts) {
    const word = match[1] ?? "";
    const space = match[2] ?? "";
    const span = document.createElement("span");
    span.className = "word";
    span.style.display = "inline-block";
    span.style.whiteSpace = "pre";
    span.textContent = word + space;
    root.appendChild(span);
    wordSpans.push(span);
  }

  return wordSpans;
}

function splitIntoChars(root: HTMLElement) {
  const text = root.textContent ?? "";
  root.textContent = "";

  const charSpans: HTMLElement[] = [];
  for (const ch of [...text]) {
    const span = document.createElement("span");
    span.className = "char";
    span.style.display = "inline-block";
    span.textContent = ch === " " ? "\u00A0" : ch;
    root.appendChild(span);
    charSpans.push(span);
  }
  return charSpans;
}

export function splitText(
  element: HTMLElement,
  { words, chars, lines, linesClass = "split-line" }: SplitOptions
): SplitResult {
  saveOriginal(element);

  const revert = () => {
    const html = originalHtml.get(element);
    if (html !== undefined) element.innerHTML = html;
  };

  let wordNodes: HTMLElement[] = [];
  let charNodes: HTMLElement[] = [];

  if (words) wordNodes = splitIntoWords(element);
  if (chars) charNodes = splitIntoChars(element);

  if (lines) {
    const inlineNodes = chars ? charNodes : wordNodes;
    if (inlineNodes.length) wrapLines(element, inlineNodes, linesClass);
  }

  return { words: wordNodes, chars: charNodes, revert };
}

export type { SplitResult };
