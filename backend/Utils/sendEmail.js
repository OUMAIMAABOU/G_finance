const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSEMAIL,
  },
});
exports.sendEmail = (email, activemail, username, msg, route) => {
  transporter.sendMail(
    {
      from: process.env.USER,
      to: email,
      subject: "confirmer email",
      html:
        "<h3>HELLO " +
        username +
        '?</h3><p> Please click <a href="http://localhost:3000' +
        route +
        activemail +
        '"> here </a> ' +
        msg +
        "</p>",
    },
    (error, info) => {
      if (error) res.send(error);
      else res.send("send");
    }
  );
};

exports.sendEmailPassword = (email, username, msg) => {
  transporter.sendMail(
    {
      from: process.env.USER,
      to: email,
      subject: "confirme password",
      html: "<h3>HELLO " + username +"?</h3><p> your password is <H1>" + msg + "</H1></p>",
    },
    (error, info) => {
      if (error) res.send(error);
      else res.send("send");
    }
  );
};
