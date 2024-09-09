import { useForm, useFormState } from "react-hook-form";
import "./styles.css";

const FormStateManagement = () => {
  const { register, handleSubmit, control } = useForm();
  const { isDirty, isValid } = useFormState({ control });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  console.log("Form State Management rendered");

  return (
    <div className="form-container">
      <h2>Form State Yönetimi</h2>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">Ad:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "Ad gerekli" })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Soyad:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Soyad gerekli" })}
          />
        </div>
        <button type="submit" disabled={!isDirty || !isValid}>
          Gönder
        </button>
        {!isDirty && <p>Formda henüz değişiklik yapılmadı.</p>}
      </form>
    </div>
  );
};

export default FormStateManagement;
