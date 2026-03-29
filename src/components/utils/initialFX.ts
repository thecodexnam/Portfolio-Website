import gsap from "gsap";
import { initLenis } from "./smoothScroll";
import { splitText, type SplitResult } from "./textSplit";

export function initialFX() {
  document.body.style.overflowY = "auto";
  initLenis().start();
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = splitMany(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { chars: true, lines: true, linesClass: "split-line" }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { chars: true, lines: true, linesClass: "split-h2" } as const;

  var landingText2 = splitOne(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = splitOne(".landing-h2-info-1", TextProps);
  var landingText4 = splitOne(".landing-h2-1", TextProps);
  var landingText5 = splitOne(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function splitOne(selector: string, opts: Parameters<typeof splitText>[1]): SplitResult {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (!el) return { words: [], chars: [], revert: () => {} };
  return splitText(el, opts);
}

function splitMany(selectors: string[], opts: Parameters<typeof splitText>[1]) {
  const splits: SplitResult[] = [];
  const chars: HTMLElement[] = [];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((node) => {
      const el = node as HTMLElement;
      const s = splitText(el, opts);
      splits.push(s);
      chars.push(...s.chars);
    });
  });

  return { splits, chars };
}

function LoopText(Text1: { chars: HTMLElement[] }, Text2: { chars: HTMLElement[] }) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
