import React, { useState } from "react";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const newErrors: ContactErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email))
      newErrors.email = "Invalid email address.";
    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(phone)) newErrors.phone = "Invalid phone number.";
    if (!message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(null);
      return;
    }

    await new Promise((r) => setTimeout(r, 600));

    setSuccess("Your form has been successfully submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="subimit-form-wrap">
      <div className="section-title">
        <h2>
          Submit Form{" "}
          <span>
            <i className="las la-arrow-right"></i>
          </span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          required
        />
        {errors.name && <p className="error-msg text-danger">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          required
        />
        {errors.email && (
          <p className="error-msg text-danger">{errors.email}</p>
        )}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          required
        />
        {errors.phone && (
          <p className="error-msg text-danger">{errors.phone}</p>
        )}

        <textarea
          name="message"
          placeholder="Message"
          rows={8}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          required
        ></textarea>
        {errors.message && (
          <p className="error-msg text-danger">{errors.message}</p>
        )}

        <button type="submit" className="theme-btn w-100">
          Submit
        </button>
      </form>

      {success && <p className="success-msg text-success">{success}</p>}
    </div>
  );
}
