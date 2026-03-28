import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const containers = containerRef.current;
    
    const listeners = containers.map((container) => {
      if (container) {
        const listener = () => handleClick(container);
        container.addEventListener("click", listener);
        return { container, listener };
      }
      return null;
    });

    return () => {
      listeners.forEach((item) => {
        if (item) {
          item.container.removeEventListener("click", item.listener);
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Frontend Development</h3>
              <h4>Description</h4>
              <p>
                Building modern, fast, and responsive web interfaces using React and modern JavaScript. Focused on clean UI, performance, and great user experience.
              </p>
              <h5>Skills & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">Git & GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Backend & AI Integration</h3>
              <h4>Description</h4>
              <p>
                Developing scalable backend systems and APIs using Node.js and Express. Integrating AI tools and automation to build smarter web applications.
              </p>
              <h5>Skills & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Authentication</div>
                <div className="what-tags">AI APIs</div>
                <div className="what-tags">Automation (n8n)</div>
                <div className="what-tags">Deployment</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  const isActivating = !container.classList.contains("what-content-active");
  
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  
  if (container.parentElement) {
    const children = Array.from(container.parentElement.children);

    children.forEach((child) => {
      if (child !== container && child.classList.contains("what-content")) {
        child.classList.remove("what-content-active");
        if (isActivating) {
          child.classList.add("what-sibling");
        } else {
          child.classList.remove("what-sibling");
        }
      }
    });
  }
}
