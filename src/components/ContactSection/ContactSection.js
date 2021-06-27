import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfoItem from "../ContactInfoItem/ContactInfoItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <div className="ContactSectionStyles">
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" me="" />
        <div className="contactSection-wrapper">
          <div className="contact-left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+35988220825" />
            <ContactInfoItem icon={<MdEmail />} text="slntgtx@gmail.com" />
            <ContactInfoItem text="Sofia, Bulgaria" />
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
