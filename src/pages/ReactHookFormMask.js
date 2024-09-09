import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import "./styles.css";

const ReactHookFormMask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  console.log("ReactHookFormMask rendered");

  return (
    <div className="form-container">
      <h2>Telefon Numarası Maskesi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="form-group">
          <label htmlFor="phone">Telefon Numarası:</label>
          <InputMask
            mask="0(999) 999 99 99"
            maskChar="_"
            {...register("phone", {
              required: "Telefon numarası gerekli",
              validate: (value) => {
                const regex = /^0\(\d{3}\) \d{3} \d{2} \d{2}$/;
                return (
                  regex.test(value) || "Geçerli bir telefon numarası girin"
                );
              },
            })}
          >
            {(inputProps) => (
              <input {...inputProps} type="text" className="form-control" />
            )}
          </InputMask>
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ReactHookFormMask;
