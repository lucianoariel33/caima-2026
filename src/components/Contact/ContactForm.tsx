import React, { useState } from "react";
import { content } from "@/content/useContent";

interface ContactState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactErrors {
  [key: string]: string;
}

interface ContactFormProps {
  showTitle?: boolean;
}

export default function ContactForm({ showTitle = true }: ContactFormProps) {
  const {
    formTitle,
    placeholders,
    errors: errorMessages,
    successMessage,
    sendingMessage,
    submitErrorMessage,
  } = content.contact;
  const { submitButton } = content.ui;

  const [formData, setFormData] = useState<ContactState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const newErrors: ContactErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\s().-]{7,30}$/;

    if (!name.trim()) newErrors.name = errorMessages.nameRequired;
    if (!email.trim()) newErrors.email = errorMessages.emailRequired;
    else if (!emailRegex.test(email))
      newErrors.email = errorMessages.emailInvalid;
    if (!phone.trim()) newErrors.phone = errorMessages.phoneRequired;
    else if (!phoneRegex.test(phone)) newErrors.phone = errorMessages.phoneInvalid;
    if (!message.trim()) newErrors.message = errorMessages.messageRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(null);
      setSubmitError(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("contact-submit-failed");
      }
    } catch {
      setSubmitError(submitErrorMessage);
      return;
    } finally {
      setIsSubmitting(false);
    }

    setSuccess(successMessage);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className={`subimit-form-wrap ${showTitle ? "" : "subimit-form-wrap--bare"}`}>
      {showTitle && (
        <div className="section-title">
          <h2>
            {formTitle}{" "}
            <span>
              <i className="las la-arrow-right"></i>
            </span>
          </h2>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder={placeholders.name}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          required
        />
        {errors.name && <p className="error-msg text-danger">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder={placeholders.email}
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
          placeholder={placeholders.phone}
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
          placeholder={placeholders.message}
          rows={8}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          required
        ></textarea>
        {errors.message && (
          <p className="error-msg text-danger">{errors.message}</p>
        )}

        <button type="submit" className="theme-btn w-100" disabled={isSubmitting}>
          {isSubmitting ? sendingMessage : submitButton}
        </button>
      </form>

      {success && (
        <p className="success-msg text-success" aria-live="polite">
          {success}
        </p>
      )}
      {submitError && (
        <p className="error-msg text-danger" aria-live="polite">
          {submitError}
        </p>
      )}
    </div>
  );
}
