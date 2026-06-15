import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactText from "./ContactText";
import GoogleMap from "./GoogleMap";

export default function ContactSection() {
  return (
    <div className="contact-section section-padding pt-0">
      <div className="container">
        <div className="row mt-60">
          {/* Left Text */}
          <div className="col-xl-5 col-lg-5">
            <ContactText />
          </div>

          {/* Contact Form */}
          <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="contact-info-wrap">
          <div className="row mt-60">
            <div className="col-xl-6">
              <GoogleMap />
            </div>

            <div className="col-xl-6">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
