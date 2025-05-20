"use client";
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const UrenAccordion = ({form, heading}) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div className="uren-accordion">
      <p className="accordion-header">
        {/* ACCORDION HEADING */}
        {heading}
        <span
          className="uren-transition accordion-header-action"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          {" "}
          Click here.{" "}
          <FaAngleDown
            className={`uren-transition ${openAccordion ? "rotate-180" : ""}`}
          />
        </span>
      </p>

      <div
        className={`accordion-body ${
          openAccordion ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {/* ACCORDION BODY CONTENT */}
        {form}
      </div>
    </div>
  );
};

export default UrenAccordion;