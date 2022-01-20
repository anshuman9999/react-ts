import Add from "./components/Add";
import List from "./components/List";
import { useLocalStorage } from "./hooks/useLocalStorage";

export interface AppState {
  people: { name: string; age: number; url: string; note?: string }[];
}

const App = () => {
  const [people, setPeople] = useLocalStorage<AppState["people"]>("people", []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="container-heading">React Typescript Crash Course</h1>
        <List people={people} />
        <Add people={people} setPeople={setPeople} />
      </div>
    </div>
  );
};

export default App;
