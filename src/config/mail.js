export default messageConfig = (to, subject, message) => {
  return {
    from: 'edusilva.dev@gmail.com',
    to,
    subject,
    text: message
  }
}
