function CategoriesCard(props) {
  return (
    <div className="Categories-card">
      <div>
        <h1>{props.heading}</h1>
        <ul>
          <li>{props.l1}</li>
          <li>{props.l2}</li>
          <li>{props.l3}</li>
          <li>{props.l4}</li>
          <li>{props.l5}</li>
          <li>{props.l6}</li>
        </ul>
      </div>
    </div>
  );
}

export default CategoriesCard;
