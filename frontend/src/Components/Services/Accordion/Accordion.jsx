import React from "react";
import useOpenController from "./useOpenController";

export const Accordion = ({ section, index, expanded, toggleAccordion }) => {
  const { isOpen, toggle } = useOpenController(false);
  console.log(section);
  return (
    <div className="accordion-container">
      <ExpendableColumn
        heading={section.heading}
        isOpen={isOpen}
        toggle={toggle}
        index={index}
        toggleAccordion={toggleAccordion}
      />
      {isOpen && <TextSection text={section.para} />}
      <div className="underline"></div>
    </div>
  );
};

export const ExpendableColumn = ({ heading, isOpen, toggle, index, toggleAccordion }) => {
  return (
    <div className="column-container" onClick={toggle}>
      <div className="column-text">{heading}</div>
      <button className="expendable-button">
        <span
          className="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          expand_more
        </span>
      </button>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};
