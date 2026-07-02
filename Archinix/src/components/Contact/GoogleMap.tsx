import { content } from "@/content/useContent";

export default function GoogleMap() {
  return (
    <div className="google-map">
      <iframe
        src={content.contact.mapUrl}
        width="600"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
        title="Ubicación del estudio"
      ></iframe>
    </div>
  );
}
