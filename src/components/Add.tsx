import useForm from "../hooks/useForm";
import { AppState } from "../App";

interface AddProps {
  people: AppState["people"];
  setPeople: React.Dispatch<React.SetStateAction<AppState["people"]>>;
}

const Add: React.FC<AddProps> = ({ people, setPeople }) => {
  const [values, setValues] = useForm<AppState["people"][0]>({
    name: "",
    age: 21,
    url: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { name, age, url, note } = values;
    if (!name || !age || !url) return;

    setPeople([
      ...people,
      {
        name,
        age,
        url,
        note,
      },
    ]);
  };

  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Name"
            onChange={setValues}
            value={values.name}
          />
        </div>
        <div className="form-item">
          <label htmlFor="Age">Age</label>
          <input
            name="age"
            placeholder="Age"
            type={"number"}
            onChange={setValues}
            value={values.age}
          />
        </div>
        <div className="form-item">
          <label htmlFor="Url">Url</label>
          <input
            name="url"
            placeholder="Url"
            onChange={setValues}
            value={values.url}
          />
        </div>
        <div className="form-item">
          <label htmlFor="Note">Note</label>
          <input
            name="note"
            placeholder="Note"
            onChange={setValues}
            value={values.note}
          />
        </div>

        <button className="form-btn" type="submit">
          Add!
        </button>
      </form>
    </div>
  );
};

export default Add;
