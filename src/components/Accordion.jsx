import { useState } from "react";
import styled from "styled-components";

const data = [
  {
    question: "How can I make order",
    answer:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit",
  },
  { question: "What are the steps of processing my order", answer: "2" },
  {
    question: "How long do I need to wait for my final project",
    answer: "dobrze",
  },
  {
    question: "Are there any additional fees",
    answer: "dobrze",
  },
  {
    question: "Are there any estimate costs",
    answer: "dobrze",
  },
];

const AccordionWrapper = styled.div`
  padding: 10rem;
`;

const StyledAccordion = styled.div`
  background-color: #fff;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-brand-950);
    background-color: var(--color-grey-0);
    padding: 1rem 0.6rem;
    border: none;
    border-bottom: 1px solid var(--color-brand-700);
    font-size: 4rem;
    transition: background-color 0.5s, color 0.5s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-950);
      color: var(--color-brand-50);
    }
  }

  span {
    font-size: 3rem;
  }
`;

const AccordionAnswer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  color: var(--color-brand-950);
  padding: 0.5rem;
  font-size: 2rem;
  margin-bottom: ${({ isOpen }) => (isOpen ? "50px" : 0)};
  transition: all 0.25s ease-in-out;
`;

function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(
    Array(data.length).fill(false)
  );

  const handleAccordionClick = (index) => {
    // Shallow copy of array
    const updatedAccordionOpen = [...accordionOpen];
    updatedAccordionOpen[index] = !updatedAccordionOpen[index];
    setAccordionOpen(updatedAccordionOpen);
  };

  return (
    <AccordionWrapper>
      {data.map((item, index) => (
        <StyledAccordion key={index}>
          <button onClick={() => handleAccordionClick(index)}>
            <div>{item.question}</div>
            {accordionOpen[index] ? <span>-</span> : <span>+</span>}
          </button>
          <AccordionAnswer isOpen={accordionOpen[index]}>
            {item.answer}
          </AccordionAnswer>
        </StyledAccordion>
      ))}
    </AccordionWrapper>
  );
}

export default Accordion;
