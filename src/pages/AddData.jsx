import { useState } from "react";

const AddData = () => {
  const [formData, setFormData] = useState({
    title: "",
    technology: [],
    newTech: "",
  });
  const handleChanged = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTech = () => {
    if (formData.newTech.trim() !== "") {
      setFormData({
        ...formData,
        technology: [...formData.technology, formData.newTech],
        newTech: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(formData);
  };
  return (
    <div className="container mx-auto px-10 py-16">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChanged}
            className="border-2 border-purple-400 px-3 py-2 rounded-md"
          />
        </div>

        <div>
          {formData.technology.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div>
          <label htmlFor="title">Skills</label>
          <input
            type="text"
            name="newTech"
            onChange={handleChanged}
            className="border-2 border-purple-400 px-3 py-2 rounded-md"
          />
          <button
            type="submit"
            onClick={handleTech}
            className="border-2 border-purple-400 px-3 py-2 rounded-md"
          >
            add
          </button>
        </div>
        <button
          type="submit"
          className="border-2 border-purple-400 px-3 py-2 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddData;
