import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Section } from "../../Styles/global"

const Result =()  =>{
  return (
      <p>Successfully sent, i will contact you soon!!!</p>
  )
}
const Contact = () => {
  const [result, showResult] = useState(false)
  const [visible, setVisible] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_yx1dvm1",
        "template_21bormr",
        e.target,
        "user_gW9TUWQZjoCki5des3Nks"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
    showResult(true)
  }
  setTimeout(() => {
    showResult(false)
  }, 5000)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 2700) {
      setVisible(true)
    } else if (scrolled <= 2700) {
      setVisible(false)
    }
  }

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // }
  
  


  window.addEventListener("scroll", toggleVisible)

  return (
    <div className="gradient__bk">
      <Section id="contact" accent>
        <div className="container pt-2 pb-5">
          <div className="section-header pt-5 pb-5 text-center">
            <h3 className="section-title">
              <span>Contact </span>Us
            </h3>
            <p className="section-subtitle mr-auto ml-auto">
              Have a question or need to get in touch? Fill out the form below
              and we will get back to you as soon as possible. If your inquiry
              is urgent, please call us at +27 63 317 9828 to talk to one of our
              staff members.
            </p>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-9 col-lg-7 mr-auto ml-auto">
                <form action="" onSubmit={sendEmail}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control rounded-0"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name..." required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email" 
                      name="email"
                      className="form-control rounded-0"
                      aria-describedby="emailHelp"
                      placeholder="Enter email..." required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control rounded-0"
                      rows="5"
                      placeholder="Enter Message..." required
                    />
                  </div>
                  <div className="form-group text-center">
                    <button
                      style={{ display: visible ? "inline" : "none" }}
                      className="btn btn-block btn-primary rounded-0 mr-auto ml-auto"
                    >
                      Join Us
                    </button>
                  </div>
                    <p className="rows">
                            {
                                result ? <Result/> : null
                            }
                    </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
