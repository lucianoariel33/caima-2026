import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactText from "./ContactText";
import { content } from "@/content/useContent";

export default function ContactSection() {
  const { formTitle } = content.contact;

  return (
    <div className="contact-section section-padding pt-0">
      <div className="container">
        <div className="contact-intro-row">
          <ContactText />
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading section-title">
            <p>Consulta</p>
            <h2>
              {formTitle}
              <span>
                <i className="las la-arrow-right"></i>
              </span>
            </h2>
          </div>

          <div className="contact-form-panel__form">
            <ContactForm showTitle={false} />
          </div>
        </div>

        <div className="contact-info-wrap">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
