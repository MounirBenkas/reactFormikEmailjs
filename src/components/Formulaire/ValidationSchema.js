import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire"),
  email: Yup.string()
    .required("L'adresse e-mail est obligatoire")
    .email("Veuillez une adresse e-mail valide"),
  message: Yup.string()
    .required("Le message est requis")
    .min(6, "Le message doit avoir 6 caractères"),
});

export default validationSchema;
