import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

import Curology from '../assets/curology-min.png';
import Yourspace from '../assets/yourspace-min.png';
import Lumin from '../assets/lumin-min.png';

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin’s unique needs",
    img: Curology,
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: Yourspace,
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: Lumin,
  },
];



const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img 
                  key={caseItem.id}
                  src={caseItem.img}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Cases;
