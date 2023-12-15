import { Box, TextField, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import "./hireform.css";
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const HireForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <Box className={"form-wrapper"} margin="auto" padding={2}>
      <Box>
        <Box className={"form-header-text"}>
          Are you ready to board this rocket ship?
        </Box>
        <Box className={"form-header-subtext"}>
          Share your excitement with us.
        </Box>
      </Box>
      <Box style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box className={"contact-form"}>
          <form onSubmit={formik.handleSubmit} style={{ maxWidth: "429px" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...formik.getFieldProps("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              id="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              {...formik.getFieldProps("message")}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
        <Box maxWidth={"50%"}>
          <img src="./rocket.png" alt="rocket" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HireForm;
