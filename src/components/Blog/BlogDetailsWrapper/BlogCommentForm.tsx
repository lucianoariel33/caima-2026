import React, { useState } from "react";

interface CommentFormState {
  name: string;
  email: string;
  comment: string;
}

interface CommentFormErrors {
  [key: string]: string;
}

export default function BlogCommentForm() {
  const [formData, setFormData] = useState<CommentFormState>({
    name: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState<CommentFormErrors>({});
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, comment } = formData;

    const validationErrors: CommentFormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) validationErrors.name = "Name is required.";
    if (!email.trim()) validationErrors.email = "Email is required.";
    else if (!emailRegex.test(email))
      validationErrors.email = "Invalid email address.";
    if (!comment.trim()) validationErrors.comment = "Comment is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage(null);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    setMessage("Your comment has been submitted successfully.");

    setFormData({
      name: "",
      email: "",
      comment: "",
    });

    setErrors({});
  };

  return (
    <div className="comments-form-wrap">
      <h3>Leave A Comment</h3>

      <div className="comments-form">
        <form onSubmit={handleSubmit} noValidate aria-label="Blog Comment Form">
          <div className="row">
            {/* Name */}
            <div className="col-md-6 col-12">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="error-msg text-danger" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="col-md-6 col-12">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="error-msg text-danger" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Comment */}
            <div className="col-12">
              <textarea
                name="comment"
                placeholder="Write your comment..."
                value={formData.comment}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.comment}
              ></textarea>
              {errors.comment && (
                <p className="error-msg text-danger" role="alert">
                  {errors.comment}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {message && (
          <p className="success-msg text-success" role="alert">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
