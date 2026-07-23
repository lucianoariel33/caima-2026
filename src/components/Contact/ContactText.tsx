import { content } from "@/content/useContent";
import MobileInfoDisclosure from "@components/MobileInfoDisclosure/MobileInfoDisclosure";

export default function ContactText() {
  return (
    <div className="contact-text">
      <span>Primera orientación</span>
      <MobileInfoDisclosure summary="Ver información">
        <p>{content.contact.intro}</p>
      </MobileInfoDisclosure>
    </div>
  );
}
