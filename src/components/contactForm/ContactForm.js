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
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
          aria-label="Contact Name"
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
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="Contact Phone (##-##-####)"
          aria-label="Contact Phone"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          value={email}
          name="email"
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
