import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>CodeXnam-(Freelance)</h5>
              </div>
              <h3>JAN 2026 - FEB 2026</h3>
            </div>
            <p>
              Developed robust, scalable web applications with React and Node.js. Built efficient backend APIs, integrated real-time functionalities, and implemented responsive UI layouts with Tailwind CSS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application</h4>
                <h5>IGNOU</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Pursuing my BCA from Indira Gandhi National Open University (IGNOU), building a strong foundation in computer science and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>‘O’ Level & ‘A’ Level</h4>
                <h5>NIELIT</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Completed comprehensive certification courses covering various aspects of IT and software technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
