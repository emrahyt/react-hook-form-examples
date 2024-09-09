import { useForm } from "react-hook-form";
import "./styles.css";

const ValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  console.log("Validation Form rendered");

  return (
    <div className="form-container">
      <h2>Validasyon Formu</h2>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">Ad:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "Ad gerekli" })}
            placeholder="Adınızı girin"
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Soyad:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Soyad gerekli" })}
            placeholder="Soyadınızı girin"
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "E-posta gerekli",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Geçerli bir e-posta adresi girin",
              },
            })}
            placeholder="E-posta adresinizi girin"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ValidationForm;
