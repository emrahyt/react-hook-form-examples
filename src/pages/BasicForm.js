import { useState } from "react";
import "./styles.css";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  console.log("Basic Form rendered");

  return (
    <div className="form-container">
      <h2>Basic Form</h2>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Ad:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Adınızı girin"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Soyad:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Soyadınızı girin"
            required
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default BasicForm;
