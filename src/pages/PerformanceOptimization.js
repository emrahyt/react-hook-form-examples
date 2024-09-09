import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";
import "./styles.css";

const NameInput = () => {
  const { register } = useFormContext();
  return (
    <div className="form-group">
      <label htmlFor="name">Ad:</label>
      <input type="text" id="name" {...register("name", { required: true })} />
    </div>
  );
};

const PhoneWatch = () => {
  const { control } = useFormContext();
  const phone = useWatch({ control, name: "phone" });
  return <p>Girilen Telefon: {phone}</p>;
};

const PerformanceOptimizedForm = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  console.log("Performance Optimized Form rendered");

  return (
    <FormProvider {...methods}>
      <div className="form-container">
        <h2>Performans Optimizasyonu</h2>
        <form
          className="form-wrapper"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <NameInput />
          <div className="form-group">
            <label htmlFor="phone">Telefon:</label>
            <input type="text" id="phone" {...methods.register("phone")} />
          </div>
          <PhoneWatch />
          <button type="submit">Gönder</button>
        </form>
      </div>
    </FormProvider>
  );
};

export default PerformanceOptimizedForm;
