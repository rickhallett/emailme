module.exports = {
    localMessage: {
        from: "kaishin@m1-air.local",
        to: "kaishin@m1-air.local",
        subject: "Test Email",
        text: "Please confirm your email",
        html: "<p>Please confirm your email</p>",
      },
      
    outgoingMessage: {
        from: '"Example Team" <from@example.com>',
        to: "user1@example.com, user2@example.com",
        subject: "Nice Nodemailer test",
        text: "Hey there, it’s our first message sent with Nodemailer ;) ",
      },
      
    messageWithAttachments: {
        from: "from@example.com",
        to: "test@example.com",
        subject: "Test Nodemailer with Mailtrap",
      
        html: "<h1>Attachments</h1>",
        attachments: [
          {
            // utf-8 string as an attachment
            filename: "text.txt",
            content: "Attachments",
          },
          {
            filename: "logo",
            path: "/Users/kaishin/dev/ts/emailme/server/api/services/doge.ico",
          },
          {
            filename: "pdf",
            path: "/Users/kaishin/dev/ts/emailme/server/api/services/blockH.pdf",
          },
        ],
      },
      
    emailFromMailGen: {
        body: {
          name: "John Appleseed",
          intro: "Welcome to Mailgen! We're very excited to have you on board.",
          action: {
            instructions: "To get started with Mailgen, please click here:",
            button: {
              color: "#22BC66", // Optional action button color
              text: "Confirm your account",
              link:
                "https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010",
            },
          },
          outro:
            "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
      },

      generateEmailBody: function(body) {
          return {
            from: '"Example Team" <from@example.com>',
            to: "user1@example.com, user2@example.com",
            subject: "Nice Nodemailer test",
            text: "Hey there, it’s our first message sent with Nodemailer ;) ",
            html: body
          }
      }
}