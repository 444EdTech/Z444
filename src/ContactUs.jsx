const ContactUs = () => {
    return ( 
        <div id="ContactUs" style={{ paddingTop: '65px' }}>
            <div className="container p-5">
                <div className="row">
                {/* Contact Information Section */}
                <div className="col-sm-4 mb-4">
                    <div className="contact-left">
                    <h1 className="mb-4">Contact Us</h1>
                    <p>
                        <i className="fa-solid fa-paper-plane" /> 444edtech@gmail.com
                    </p>
                    <p>
                        <i className="fa-solid fa-phone" /> +91 9100152939 (or) +91
                        9059231311
                    </p>
                    <div className="social-icons1">
                        <a
                        href="https://www.linkedin.com/in/sai-ram-charan-t/"
                        target="_blank"
                        className="me-2"
                        >
                        <i className="fa-brands fa-linkedin fa-lg" />
                        </a>
                        <a
                        href="https://www.linkedin.com/in/yaswanth-pallapothu/"
                        target="_blank"
                        >
                        <i className="fa-brands fa-linkedin fa-lg" />
                        </a>
                    </div>
                    </div>
                </div>
                {/* Contact Form Section */}
                <div className="col-sm-8 mb-4 text-align-left">
                    <div className="contact-right">
                    <br />
                    <form name="submit-to-google-sheet">
                        <div className="mb-3">
                        <input
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            required=""
                            className="form-control"
                        />
                        </div>
                        <div className="mb-3">
                        <input
                            type="email"
                            name="Email"
                            placeholder="Your Email"
                            required=""
                            className="form-control"
                        />
                        </div>
                        <div className="mb-3">
                        <textarea
                            name="Message"
                            rows={6}
                            placeholder="Your Message"
                            className="form-control"
                            defaultValue={""}
                        />
                        </div>
                        <input
                        type="submit"
                        className="btn btn-primary"
                        defaultValue="Submit"
                        />
                    </form>
                    <span id="msg" />
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default ContactUs;