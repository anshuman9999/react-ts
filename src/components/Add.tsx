import useForm from "../hooks/useForm";

interface FormValues {
  name: string;
  age: string;
  url: string;
  note?: string;
}

const Add = () => {
  const [values, setValues] = useForm<FormValues>({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  return (
    <div className="form-container">
      <form
        className="form-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            name: values.name,
            age: values.age,
            url: values.url,
            note: values?.note,
          });
        }}
      >
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
