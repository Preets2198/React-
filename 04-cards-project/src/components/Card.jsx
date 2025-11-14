import React, { useState } from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.logo} alt="company logo" />
          <button>Save<Bookmark/><Bookmark size={12} color="#fafafa" strokeWidth={1.25}></Bookmark>
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company}
            <span> {props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag-container">
            <div className="tag1">
              <h4>{props.tag1}</h4>
            </div>
            <div className="tag2">
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button
          className={applied ? "applied-btn" : ""}
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default Card;