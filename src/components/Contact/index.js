import "./index.css";

const Contact = () => (
  <div className="contacts-container">
    <div className="contact-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
        alt="contact"
        className="contact-img"
      />
      <h1 className="contact-heading">Contact</h1>
    </div>
    <div className="contact-container">
      <img
        src="https://pbs.twimg.com/profile_images/1318652224638124032/wrpp2Nl4_400x400.png"
        alt="contact"
        className="contact-img"
      />
      <h1 className="contact-heading">WhatsApp</h1>
    </div>
    <div className="contact-container">
      <img
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        alt="contact"
        className="contact-img"
      />
      <h1 className="contact-heading">Twitter</h1>
    </div>
  </div>
);

export default Contact;
