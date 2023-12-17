import React from "react";
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

  const formWrapperStyles = {
    paddingLeft: "100px",
    boxShadow: "0px 4px 8px #BBA98E26",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const contactFormStyles = {
    backgroundColor: "#F3F3F3",
    boxShadow: "0px 4px 8px #BBA98E26",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80vh",
    width: "40%",
    padding: "40px",
    marginBottom: "50px",
    marginTop: "50px",
    paddingBottom: "150px",
  };

  const imageStyles = {
    width: "50%",
    marginTop: "auto",
  };

  return (
    <Box sx={formWrapperStyles} className={"form-wrapper"}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "100%",
          paddingLeft: "100px",
        }}
      >
        <Box className={"form-header-text"}>
          Are you ready <br /> to board this rocket ship?
        </Box>
        <Box className={"form-header-subtext"}>
          Share your excitement with us.
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start", // Ustawione, aby elementy były na górze kontenera
          maxWidth: "1280px",
          height: "100%",
        }}
      >
        <Box sx={contactFormStyles} className={"contact-form"}>
          <form
            onSubmit={formik.handleSubmit}
            style={{ height: "100%", maxWidth: "512px", width: "100%" }}
          >
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
              rows={15}
              margin="normal"
              {...formik.getFieldProps("message")}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <Button
                type="submit"
                style={{
                  backgroundColor: "#3D4F5C",
                  color: "white",
                  borderRadius: "32.5px",
                  padding: "10px 20px",
                }}
              >
                Shoot us a message
              </Button>
            </Box>
          </form>
        </Box>

        <Box style={imageStyles}>
          <img src="./rocket.png" alt="rocket" />
        </Box>
      </Box>
    </Box>
  );
};

export default HireForm;
