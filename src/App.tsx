import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";

interface AppState {
  people: { name: string; age: number; url: string; note?: string }[];
}

const App = () => {
  const [people, setPeople] = useState<AppState["people"]>([
    {
      name: "Ashish Papanai",
      age: 21,
      url: "https://avatars.githubusercontent.com/u/52123364?v=4",
      note: "Unemployed",
    },
  ]);
  return (
    <div className="App">
      <div className="container">
        <h1 className="container-heading">React Typescript Crash Course</h1>
        <List people={people} />
        <Add />
      </div>
    </div>
  );
};

export default App;
