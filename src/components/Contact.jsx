import React from 'react'
//import env from "dotenv";
//env.config();

let access_key ;
function Contact() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5 view" id="contact">
  <div className="row align-items-center g-lg-5 py-5">
    <div className="col-lg-7 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
        Contact
      </h1>
      <p className="col-lg-10 fs-4">
        Whether you have a question, want to start a project or simply want to
        connect, feel free to send me a message in the contact form
      </p>
    </div>
    <div className="col-md-10 mx-auto col-lg-5">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
      >
       <input type="hidden" name="access_key" defaultValue= {import.meta.env.VITE_ACCESS_KEY} />

        <input type="hidden" name="redirect" defaultValue="thanks.html" />
        <fieldset>
          <label htmlFor="first-name">
            Enter Your First Name*: <br />
            <input
              id="first-name"
              name="first-name"
              type="text"
              className="form-control"
              required=""
            />
          </label>
          <label htmlFor="last-name">
            Enter Your Last Name: <br />
            <input
              id="last-name"
              name="last-name"
              type="text"
              className="form-control"
            />
          </label>
          <label htmlFor="email">
            Enter Your Email*: <br />
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              required=""
            />
          </label>
        </fieldset>
        <fieldset border={0}>
          <label htmlFor="msg">
            Message*: <br />
            <textarea
              id="msg"
              name="msg"
              rows={3}
              cols={30}
              placeholder="..."
              className="form-control"
              required=""
              defaultValue={""}
            />
          </label>
        </fieldset>
        <input
          type="submit"
          defaultValue="SUBMIT"
          id="submit"
          className="btn btn-success"
        />
      </form>
    </div>
  </div>
</div>

  )
}

export default Contact