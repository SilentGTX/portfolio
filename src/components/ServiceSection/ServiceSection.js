import React from "react";
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from "react-icons/md";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServicesSectionItem from "../ServicesSectionItem/ServicesSectionItem";
import "./ServiceSection.css";

export default function ServiceSection() {
  return (
    <div className="ServicesItemStyles">
      <div className="container">
        <SectionTitle
          heading="Services"
          subheading="what I will do for you"
          me=""
        />
        <div className="services-allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui design for the website that helps it get unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance websites with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app dev"
            desc="I develop mobile friendly applications with eye catching ui."
          />
        </div>
      </div>
    </div>
  );
}
