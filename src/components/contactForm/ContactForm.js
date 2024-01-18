import { toBeRequired } from "@testing-library/jest-dom/matchers";
import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contact Name"
          aria-label="Contact Name"
          required
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Contact Phone (###-###-####)"
          pettern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          aria-label="Contact Phone"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
          aria-label="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};
