module.exports = returnHTML = (title, message, name, email) => {
  return `
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          style="font-family: 'Poppins', sans-serif; padding: 10px"
        >
          <tr style="display: block; margin-top: 20px; letter-spacing: 1.2px; padding: 10px">
            <td bgcolor="#fff" id="title">${title}</td>
          </tr>

          <tr style="display: block; margin-top: 20px; letter-spacing: 1.2px; padding: 10px">
            <td bgcolor="#fff" id="title">
              <span>Informaçòes do cliente:</span>
              <br />
              Nome: ${name}
              <br />
              Email: ${email}
            </td>
          </tr>

          <tr style="display: block; margin-top: 30px; letter-spacing: 1.2px; padding: 10px">
            <td bgcolor="#fff" id="message">${message}</td>
          </tr>
        </table>
      </body>
    </html>
  `
}
