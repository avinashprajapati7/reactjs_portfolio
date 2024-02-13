const {
  REACT_APP_TEMPLATE_ID,
  REACT_APP_SERVICE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY
} = process.env

const emailjsConfig = {
  templateID: REACT_APP_TEMPLATE_ID,
  serviceID: REACT_APP_SERVICE_ID,
  emailjsPublicKey: REACT_APP_EMAILJS_PUBLIC_KEY
}

export default emailjsConfig; 