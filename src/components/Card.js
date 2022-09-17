import React from "react";
import Accordion from "./Accordion";
import { data } from "../data";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex content-between flex-column flex-lg-row px-4 pt-3">
          <div className="col-12 col-lg-4">
            <h3 className="accordion-title">
              Questions And Answers About Login
            </h3>
          </div>
          <div className="col-12 col-lg-8">
            <div className="d-flex content-start flex-column">
                {
                    data.map(accordion => {
                        const {id, question, answer} = accordion
                        return <Accordion key={id} question={question} answer={answer}/>
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
