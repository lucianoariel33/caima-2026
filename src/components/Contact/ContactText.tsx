import { content } from "@/content/useContent";

export default function ContactText() {
  return (
    <div className="contact-text">
      <span>Primera orientación</span>
      <p>{content.contact.intro}</p>
    </div>
  );
}
