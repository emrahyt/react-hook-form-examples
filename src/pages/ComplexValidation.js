import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

const ComplexValidationForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
  };

  console.log("complex validation rendered");

  return (
    <div className="form-container">
      <h2>Karmaşık Validasyon Formu</h2>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Kullanıcı adı gerekli",
              minLength: {
                value: 5,
                message: "Kullanıcı adı en az 5 karakter olmalı",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "Kullanıcı adı yalnızca harf ve rakam içermelidir",
              },
            })}
            placeholder="Kullanıcı adınızı girin"
          />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Şifre:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Şifre gerekli",
              minLength: {
                value: 8,
                message: "Şifre en az 8 karakter olmalı",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/,
                message:
                  "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir",
              },
            })}
            placeholder="Şifrenizi girin"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="showPassword"
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Şifreyi Göster</label>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Şifreyi Onayla:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Şifreyi onaylamanız gerekli",
              validate: (value) =>
                value === getValues("password") || "Şifreler uyuşmuyor",
            })}
            placeholder="Şifrenizi tekrar girin"
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ComplexValidationForm;
