import { useForm, useFieldArray } from "react-hook-form";
import "./styles.css";

const DynamicFields = () => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "textFields",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  console.log("Dynamic Fields rendered");

  return (
    <div className="form-container">
      <h2>Dinamik Text Alanları</h2>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div className="form-group" key={field.id}>
            <label htmlFor={`textFields[${index}].text`}>
              Text Alanı {index + 1}:
            </label>
            <input
              type="text"
              {...register(`textFields[${index}].text`)}
              id={`textFields[${index}].text`}
            />
            <button type="button" onClick={() => remove(index)}>
              Sil
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ text: "" })}>
          Yeni Text Alanı Ekle
        </button>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default DynamicFields;
