const nodemailer = require('nodemailer');


exports.getIndexPage = (req, res) => {
    console.log(req.session.userID, req.session.userEMAIL);
    res.status(200).render('index', {
        page_name: 'index'
    })
}

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about'
    })

}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register'
    })

}

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login'
    })

}
exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact'
    })

}

exports.sendEmail = async (req, res) => {

    const outputMessage = `
        <h1>Mail Details</h1>
        <ul> 
        <li>Name:${req.body.name} </li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h1>Message</h1>
        <p> ${req.body.message} </p>
    `
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "shawn.steuber67@ethereal.email",
            pass: "TYT4Rb7fyFYxa1GRvk",
        },
    });

    try {
        const info = await transporter.sendMail({
            from: '"Smart EDU Contact Form " <cassandra.greenholt13@ethereal.email>',
            to: req.body.email,
            subject: "Smart EDU Contact Form New Message",
            html: outputMessage,
        })
        req.flash("success", "We Received your message succesfully");
        
        res.status(200).redirect('/contact');
    } catch (error) {
        req.flash("error", "Something happened!");
        
        res.status(200).send("An error occurred while sending the email.");
    }
}