import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(
    () => contacts.map((contact) => contact.name),
    [contacts]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={contact}
          name="name"
          onChange={(e) => setContact(e.target.value)}
          placeholder="Appointment Name"
          aria-label="Appointment Name"
          required
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          value={date}
          name="date"
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          aria-label="Date Picker"
          required
        />
      </label>
      <br />
      <label>
        <input
          value={time}
          name="time"
          onChange={(e) => setTime(e.target.value)}
          type="time"
          aria-label="Time Picker"
          required
        />
      </label>
      <br />
      <input
        type="submit"
        value="Add Appointment"
        aria-label="Add Appointment"
      />
    </form>
  );
};
