
const ContactForm = () => {
  return (
    <>
      <p className="section-heading">Contact me</p>
      <form method="POST" action="https://formspree.io/f/meoqwzdo" className="contact-form">
        <div className="flex flex-col">
          <label htmlFor="name" className="contact-form_label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name "
            required
            className="contact-form_input"
          />
        </div> 
        <div  className="flex flex-col">
          <label htmlFor="email" className="contact-form_label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="contact-form_input"
          />
        </div>
        <div  className="flex flex-col">
          <label htmlFor="message" className="contact-form_label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="contact-form_textarea"
          ></textarea>
        </div>
        <button
          type="submit"
          className="contact-form_btn"
          aria-label="send"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;

