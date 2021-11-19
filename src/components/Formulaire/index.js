import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import validationSchema from "../Formulaire/ValidationSchema";
import sendEmail from "../Formulaire/sendEmail";
import "./formulaire.scss";

const Formulaire = () => {
  const [send, setSend] = useState("Envoyer");
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (value, onSubmittingProps) => {
    console.log(onSubmittingProps);
    try {
      await sendEmail(value);
      await setTimeout(() => {
        setSend("message envoyer");
      }, 3000);

      onSubmittingProps.resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });
  console.log(formik);
  return (
    <div className="flex">
      <Typography variant="h4" className="title">
        Formulaire de contact
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="name"
          type="text"
          name="name"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <TextField
          label="email"
          type="email"
          name="email"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <TextField
          label="message"
          name="message"
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div style={{ color: "red" }}>{formik.errors.message}</div>
        ) : null}

        <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {send}
        </Button>
      </form>
    </div>
  );
};

export default Formulaire;
