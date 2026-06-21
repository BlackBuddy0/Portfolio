import skill1 from "../../assets/skill1.png";
import skill2 from "../../assets/skill2.png";
import skill3 from "../../assets/skill3.png";
import skill4 from "../../assets/skill4.png";
import skill5 from "../../assets/skill5.png";
import skill6 from "../../assets/skill6.png";
import skill7 from "../../assets/skill7.png";
import skill8 from "../../assets/skill8.png";
import skill9 from "../../assets/skill9.png";

import './about.css'

const about = () => {
  return (
    <>
    <div className="introduction">
      <div className="introAndHobbies">
        <div className="intro shiftright">
          <h1 className="introHeading">About</h1>

          <div className="introContent">
            <p>
              I'm Black Buddy, a web developer passionate about building modern,
              responsive, and user-friendly applications.
            </p>

            <p>
              Currently pursuing B.Tech in CSE at IIIT Bhopal and continuously
              learning new technologies in web development and software
              engineering.
            </p>

            <p>
              I enjoy solving real-world problems through code and creating
              projects that improve user experience.
            </p>

            <p>
              My current focus is on full-stack development, system design, and
              scalable web applications.
            </p>

            <p>
              Outside coding, I enjoy sports, sketching, music, and learning
              new skills.
            </p>
          </div>
        </div>

        <div className="hobbiesAndEducation">
          <div className="hobbies shiftup">
            <h1 className="hobbiesHeading">Hobbies</h1>

            <div className="hobbiesContent">
              <ul>
                <li>Problem Solving</li>
                <li>Web Designing</li>
                <li>Sketching</li>
                <li>Dancing</li>
                <li>Learning New Skills</li>
                <li>Listening to Music</li>
                <li>Cooking Food</li>
                <li>Badminton & Football</li>
              </ul>
            </div>
          </div>

          <div className="education shiftup">
            <h1 className="educationHeading">Education</h1>

            <div className="educationContent">
              <dl>
                <dt>→ 2009 to 2020</dt>
                <dd>M.G.E.M Jr. High School</dd>

                <dt>→ 2020 to 2022</dt>
                <dd>St. John's Sr. Sec. School</dd>

                <dt>→ 2022 to 2024</dt>
                <dd>Pt. Murari Lal (JEE Preparation)</dd>

                <dt>→ 2024 to 2028</dt>
                <dd>IIIT Bhopal (CSE Core)</dd>
              </dl>

              {/*
              <p>(2009 to 2020) - M.G.E.M Jr. High School</p>
              <p>(2020 to 2022) - St. John's Sr. Sec. School</p>
              <p>(2022 to 2024) - Pt. Murari Lal</p>
              <p>(2024 to 2028) - IIIT Bhopal</p>
              */}
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="skillsdiv shiftleft">
          <h1 className="skillsHeading">Skills</h1>

          <div className="skillsContent">
            <div className="skillelements">
              <img src={skill3} alt="HTML" className="skill3" />
              <p>HTML5</p>
            </div>

            <div className="skillelements">
              <img src={skill4} alt="CSS" className="skill4" />
              <p>CSS</p>
            </div>

            <div className="skillelements">
              <img src={skill6} alt="NodeJS" className="skill6" />
              <p>Node JS</p>
            </div>

            <div className="skillelements">
              <img src={skill1} alt="C" className="skill1" />
              <p>C</p>
            </div>

            <div className="skillelements">
              <img src={skill2} alt="C++" className="skill2" />
              <p>C++</p>
            </div>

            <div className="skillelements">
              <img src={skill7} alt="DSA" className="skill7" />
              <p>Data Structures</p>
            </div>

            <div className="skillelements">
              <img src={skill5} alt="Time Management" className="skill5" />
              <p>Time Management</p>
            </div>

            <div className="skillelements">
              <img src={skill8} alt="Video Editing" className="skill8" />
              <p>Video Editing</p>
            </div>

            <div className="skillelements">
              <img src={skill9} alt="Athleticism" className="skill9" />
              <p>Athleticism</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default about