import React from "react";

interface ListProps {
  people: { name: string; age: number; url: string; note?: string }[];
}

const List: React.FC<ListProps> = ({ people }) => {
  return (
    <div className="list-container">
      {people.map((person) => (
        <div className="list-item">
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
      ))}
    </div>
  );
};

export default List;
