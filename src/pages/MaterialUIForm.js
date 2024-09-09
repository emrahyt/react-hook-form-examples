import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(1, "Ad gerekli")
    .min(2, { message: "Ad en az 2 karakter olmalı" }),
  lastName: z
    .string()
    .min(1, "Soyad gerekli")
    .min(2, { message: "Soyad en az 2 karakter olmalı" }),
});

const MaterialUIForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  console.log("Material UI Form rendered");

  return (
    <Container maxWidth="sm" style={{ marginTop: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Material UI Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Ad"
              fullWidth
              margin="normal"
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Soyad"
              fullWidth
              margin="normal"
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ""}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Gönder
        </Button>
      </form>
    </Container>
  );
};

export default MaterialUIForm;
