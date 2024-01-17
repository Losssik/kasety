import { useState } from "react";
import styled from "styled-components";

const data = [
  { question: "122", answer: "1" },
  { question: "2", answer: "2" },
  { question: "jak sie masz", answer: "dobrze" },
];

const AccordianWrapper = styled.div`
  padding: 14rem;
  background-color: yellowgreen;
`;

const StyledAccordion = styled.div`
  background-color: red;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }
`;

function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(
    Array(data.length).fill(false)
  );

  const handleAccordionClick = (index) => {
    //shallow copy of array
    const updatedAccordionOpen = [...accordionOpen];
    updatedAccordionOpen[index] = !updatedAccordionOpen[index];
    setAccordionOpen(updatedAccordionOpen);
  };

  return (
    <AccordianWrapper>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <button onClick={() => handleAccordionClick(index)}>
            <div>{item.question}</div>
            {accordionOpen[index] ? <span>-</span> : <span>+</span>}
          </button>
          {accordionOpen[index] && <div>{item.answer}</div>}
        </StyledAccordion>
      ))}
    </AccordianWrapper>
  );
}

export default Accordion;
