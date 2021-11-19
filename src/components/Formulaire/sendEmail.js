import emailjs from "emailjs-com";
/**
 *
 * @param {Object} value recupere les valeurs du formulaire
 */
const sendEmail = (value) => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;
  emailjs
    .send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, value, REACT_APP_USER_ID)
    .then((result) => {
      console.log((result.text = "le message a ete envoye"));
    })
    .catch((error) => console.log(error));
};

export default sendEmail;
