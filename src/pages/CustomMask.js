import { useForm } from "react-hook-form";
import "./styles.css";

const CustomMask = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      phone: "0(___) ___ __ __",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    let cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.length > 1) {
      value = `0(${cleanedValue.slice(1, 4)}) ${cleanedValue.slice(
        4,
        7
      )} ${cleanedValue.slice(7, 9)} ${cleanedValue.slice(9, 11)}`;
    } else {
      value = "0(___) ___ __ __";
    }

    setValue("phone", value);
  };

  const handleKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === "Backspace") {
      let cleanedValue = value.replace(/\D/g, "");
      const cursorPosition = e.target.selectionStart;

      if (
        cursorPosition > 0 &&
        (value[cursorPosition - 1] === " " ||
          value[cursorPosition - 1] === ")" ||
          value[cursorPosition - 1] === "(")
      ) {
        e.target.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        e.preventDefault();
      }

      if (cleanedValue.length <= 1) {
        setValue("phone", "0(___) ___ __ __");
        e.preventDefault();
      }
    }
  };

  const validatePhone = (value) => {
    const regex = /^0\(\d{3}\) \d{3} \d{2} \d{2}$/;
    return regex.test(value) || "Geçerli bir telefon numarası girin";
  };

  console.log("Custom Mask rendered");

  return (
    <div className="form-container">
      <h2>Telefon Numarası Maskesi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="form-group">
          <label htmlFor="phone">Telefon Numarası:</label>
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Telefon numarası gerekli",
              validate: validatePhone,
            })}
            onChange={handlePhoneChange}
            onKeyDown={handleKeyDown}
            onBlur={() => trigger("phone")}
          />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default CustomMask;
