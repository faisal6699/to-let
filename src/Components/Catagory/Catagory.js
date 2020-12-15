import React from "react";
import { Link } from "react-router-dom";
import duplex from "../../Assets/images/duplex.png";
import apartment from "../../Assets/images/apartment.png";
import bachelorhouse from "../../Assets/images/bachelorhouse.png";
import familyhouse from "../../Assets/images/familyhouse.png";
import forsale from "../../Assets/images/forsale.png";
import sublet from "../../Assets/images/sublet.png";
import "./_catagory.scss";

const Catagory = ({ setCatagory }) => {
  return (
    <>
      <div id="catagory">
        <h2 className="title">Choose a catagory</h2>
        <div className="catagory-links">
          <Link to="#" className='link' onClick={() => setCatagory("duplex")}>
            <span>
              <img src={duplex} /> duplex
            </span>
          </Link>
          <Link to="#" className='link' onClick={() => setCatagory("apartment")}>
            <span>
              <img src={apartment} /> apartment
            </span>
          </Link>
          <Link to="#" className='link' onClick={() => setCatagory("familyhouse")}>
            <span>
              <img src={familyhouse} /> familyhouse
            </span>
          </Link>
        </div>
        <div className="catagory-links">
          <Link to="#" id="sublet" className='link' onClick={() => setCatagory("sublet")}>
            <span>
              <img src={sublet} /> sublet
            </span>
          </Link>
          <Link to="#" id="bachelor" className='link' onClick={() => setCatagory("bachelor")}>
            <span>
              <img src={bachelorhouse} /> Bachelor/Mass
            </span>
          </Link>
          <Link to="#" className='link' onClick={() => setCatagory("forsale")}>
            <span>
              <img src={forsale} /> House for sale
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Catagory;
