import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardLink,
} from "reactstrap";

const Index = ({ recipe }) => {
  return (
    <div className="card-container">
      {recipe?.map((recipeItem) => (
        <div key={recipeItem.id}>
          <Card className="card">
            <CardBody>
              <CardTitle tag="h5" className="card-title">{recipeItem.name}</CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src={recipeItem.image}
              width="100%"
            />
            <CardBody className="card-link">
              <CardLink href={`/show/${recipeItem.id}`}>Recipe</CardLink>{" "}
              <CardLink href={`/reviews/${recipeItem.id}`}>Reviews</CardLink>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Index;
