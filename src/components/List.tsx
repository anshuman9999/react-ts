import React from "react";
import { AppState } from "../App";
import { AddProps } from "./Add";

const List: React.FC<AddProps> = ({ people, setPeople }) => {
  const personDeleteHandler = (person: AddProps["people"][0]): void => {
    let peopleCopy = [...people];
    peopleCopy = peopleCopy.filter((p) => p.name !== person.name);

    setPeople(peopleCopy);
  };

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => (
      <div className="list-item__container">
        <div key={person.name + index} className="list-item">
          <div className="list-item__name">
            <div className="img-container">
              <img src={person.url} style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <span>{person.name}</span>
            </div>
          </div>
          <div className="list-item__age">
            <span>{person.age} years old</span>
          </div>
          <div className="list-item__note">
            <span>{person.note}</span>
          </div>
        </div>
        <div className="list-item__del">
          <button onClick={() => personDeleteHandler(person)}>Delete</button>
        </div>
      </div>
    ));
  };

  return <div className="list-container">{renderList()}</div>;
};

export default List;
