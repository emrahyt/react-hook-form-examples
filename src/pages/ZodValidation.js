import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./styles.css";

const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Ad gerekli" })
    .min(2, { message: "Ad en az 2 karakter olmalı" }),
  lastName: z
    .string()
    .min(1, { message: "Soyad gerekli" })
    .min(2, { message: "Soyad en az 2 karakter olmalı" }),
  email: z
    .string()
    .min(1, { message: "E-posta gerekli" })
    .email({ message: "Geçerli bir e-posta adresi girin" }),
});

const ZodValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  console.log("Zod Validation Form rendered");

  return (
    <div className="form-container">
      <h2>Zod ile Validasyon Formu</h2>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">Ad:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
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
            {...register("lastName")}
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
            {...register("email")}
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

export default ZodValidationForm;
