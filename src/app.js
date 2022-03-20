const express = require('express')
const nodemailer = require('nodemailer')
const returnHTML = require('./template/mailTemplate')
const SMTP_CONFIG = require('./config/smtp')
const EMAILS = require('./mock/data')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: SMTP_CONFIG.service,
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: 'edusilva.dev@gmail.com',
    pass: 32614513
  },
  tls: {
    rejectUnauthorized: false
  }
})

app.get('/', (req, res) => {
  res.json({ ping: 'pong' })
})

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body

  const title = `Nova mensagem de ${name}`

  const mailSent = await transporter.sendMail({
    from: 'edusilva.dev@gmail.com',
    to: EMAILS,
    subject: title,
    text: message,
    html: returnHTML(title, message, name, email)
  })

  res.json({ response: mailSent })
})

app.listen(3000, () => {
  console.log('http://localhost:3040')
})
