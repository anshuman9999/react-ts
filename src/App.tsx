import { useState } from "react";

interface People {
  name: string;
  age: number;
  url: string;
  note?: string;
}

const App = () => {
  const [people, setPeople] = useState<People[]>([]);
  return (
    <div className="App">
      <div className="container">
        <h1 className="container-heading">React Typescript Crash Course</h1>
      </div>
    </div>
  );
};

export default App;
