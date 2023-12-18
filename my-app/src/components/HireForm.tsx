import React from "react";
import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import "./hireform.css";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const HireForm = () => {
  const isSmallScreen = useMediaQuery("(min-width: 900px)");

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
    <Box className="form-wrapper">
      <Box className="header-text-wrapper">
        <Box className="form-header-text">
          Are you ready to board this rocket ship?
        </Box>
        <Box className="form-header-subtext">
          Share your excitement with us.
        </Box>
      </Box>
      <Box className="form-content-wrapper">
        <Box className={"form-wrapper-smallest"}>
          <form onSubmit={formik.handleSubmit} className="contact-form">
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
              rows={12}
              margin="normal"
              {...formik.getFieldProps("message")}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Box className="button-wrapper">
              <Button
                type="submit"
                className="submit-button"
                sx={{
                  backgroundColor: "#3D4F5C",
                  borderRadius: "32.5px",
                  color: "white",
                  padding: "15px 20px",
                  textTransform: "none",
                }}
              >
                <b>Shoot us a message</b>
              </Button>
            </Box>
          </form>
        </Box>
        {isSmallScreen && (
          <Box className={"img-form-container"}>
            <img src="./rocket.png" alt="rocket" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HireForm;
