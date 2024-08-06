import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-heading mb-8">Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
