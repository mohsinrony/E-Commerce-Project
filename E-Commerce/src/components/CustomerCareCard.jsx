import React from "react";
function CustomerCareCard(props) {
  return (
    <div className="container">
      <div className="Customer-care">
        <h1>{props.heading}</h1>
        <ul>
          <li>{props.l1}</li>
          <li>{props.l2}</li>
          <li>{props.l3}</li>
          <li>{props.l4}</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerCareCard;
