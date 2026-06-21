import './common.css';

const form = () => {
  return (
    <>
    <div className="form">
      <h1 style={{ marginTop: "10px", color: "aqua" }}>Enter Your Details</h1>

      <div className="login">
        <div className="userNamediv">
          <input
            type="text"
            id="userName"
            className="userName"
            required
            autoComplete="off"
          />
          <label htmlFor="userName" className="userNameLabel">
            Username
          </label>
        </div>

        <div className="Emaildiv">
          <input
            type="email"
            id="Email"
            className="Email"
            required
            autoComplete="off"
          />
          <label htmlFor="Email" className="EmailLabel">
            Email
          </label>
        </div>

        <button className="submitButton">
          Submit
        </button>
      </div>
    </div>
    </>
  )
}

export default form