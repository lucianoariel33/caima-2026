interface ContactContent {
  paragraph: string;
}

const contactContent: ContactContent = {
  paragraph:
    "Have a question about our services or want to get started on your design project? We are here to help! Fill out the contact form below and one of our team members will get back to you within 24 hours. Alternatively, you can reach out via phone or email. We can't wait to hear from you!",
};

export default function ContactText() {
  return (
    <div className="contact-text">
      <p>{contactContent.paragraph}</p>
    </div>
  );
}
