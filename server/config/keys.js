module.exports = {
  mailTrap: {
    default: {
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "",
        pass: "",
      },
    },

    defaultDKIM: {
      host: "smtp.example.com",
      port: 465,
      secure: true,
      dkim: {
        domainName: "example.com",
        keySelector: "2017",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...",
      },
    },
  },

  local: {
    port: 25,
    host: "m1-air.local",
    tls: {
      rejectUnauthorized: false,
    },
  },
};
