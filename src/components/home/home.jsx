import profileImage from "../../assets/black buddy.jpg";
import './home.css'

const home = ({ setCurrentPage }) => {
  return (
    <div className="entryPage">
      <div className="nameSection shiftup">
        <h1
          style={{
            color: "rgb(140, 140, 140)",
            filter: "brightness(200%)",
          }}
        >
          Hi, I am
        </h1>

        <h1 className="name1">Black Buddy</h1>

        <h2 style={{ color: "silver" }}>
          A Classic Web Developer
        </h2>

        <div className="hireButtons">
          <button className="hireMe" onClick={() =>
            window.location.href =
              "mailto:anubhavmaheshwari066@gmail.com?subject=Hiring Inquiry"
          }>
            Hire me
          </button>
          <button className="seeWork" onClick={() => setCurrentPage('project')}>See my work</button>
        </div>
      </div>

      <div className="imageSection shiftup">
        <img
          src={profileImage}
          alt="Black Buddy"
          className="image1"
        />
      </div>
    </div>
  )
}

export default home