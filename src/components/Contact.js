

const Contact = ({ textContent }) => {

  const {
    h2,
    socialH4,
    githubLink,
    linkinLink,
    resumeBtn,
    formTitle,
    formEmail,
    formSubject,
    formMessageSubject,
    formBtn,
    messageWarnng
  } = textContent


  const handleSumit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    window.location.href = `mailto:ivanlaurenciosantana15@gmail.com?subject=${form.get("subject")} - ${form.get("email")}&body=${form.get("message")}`

  }
  return (
    <section id="contact" className='container w-100 my-5 py-2 text-center d-flex flex-column justify-content-center align-items-center rounded contact '>
      <h2>{h2}</h2>
      <div className="row mt-5 w-100">
        <div className="col-md-4  ">

          <h4>{socialH4}</h4>
          <div>
            <a href="#" className="btn btn-outline-success m-3">{githubLink}</a>
            <a href="#" className="btn btn-outline-success m-3">{linkinLink}</a>
            <button>{resumeBtn}</button>
          </div>

        </div>

        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
          <h4>{formTitle}</h4>
          <form className=" border p-4 w-75 text-start rounded"
            onSubmit={(e) => handleSumit(e)}
          >
            <div className="form-group m-1">
              <label className="w-100">{formEmail.label}
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={formEmail.placeholder} />

              </label>
            </div>
            <div className="form-group m-1">
              <label className="w-100">{formSubject.label}
                <input type="text" name="subject" className="form-control" placeholder={formSubject.placeholder} />
              </label>
            </div>
            <div className="form-group m-1">
              <label className="w-100" >{formMessageSubject.label}

                <textarea name="message" className="form-control" rows="3"></textarea>
              </label>
            </div>


            <button type="submit" className="btn btn-primary">{formBtn}</button>
          </form>

          <div className=" mt-3 alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{messageWarnng}</strong>.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact