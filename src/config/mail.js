export default messageConfig = (to, subject, message) => {
  return {
    from: process.env.SENDER_MAIL,
    to,
    subject,
    text: message
  }
}
