const nodemailer = require('nodemailer')

module.exports = {
    sendmail: async (req, res, next)=>{
        console.log(req.body)
        if(req.body === {} || !req.body.email || !req.body.name || !req.body.subject || !req.body.text){
            res.status(404).json({
                success: false,
                msg: 'Invalid data!'
            })
        }
        else{
            let email = req.body.email;
            let name = req.body.name;
            let subject = `[From: ${email}] : ${req.body.subject}`;
            let text = `${name} have just received an invitation from email: ${email}
                        ${req.body.text}`

            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                  user: 'mrbenzene28021995@gmail.com',
                  pass: 'Anhtan1995'
                }
              });
              
              var mailOptions = {
                from: email,
                to: 'mchemistry95@gmail.com',
                subject: subject,
                text: text
              };
              
              await transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  res.status(404).json({
                      success: false,
                      mgs: 'Error: ' + error
                  })
                } else {
                  res.status(200).json({
                      success: true,
                      msg: 'Your message has been sent! I will reply you soon!',
                      info: info.response
                  })
                }
              });
              
            
        }
    }
}