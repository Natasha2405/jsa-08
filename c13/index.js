// var mailgun = require('mailgun.js');
// var mg = mailgun.client({
//     username: 'api',
//     key: process.env.MAILGUN_API_KEY || '1addd7accd5e271acf60c75e82cbf6d6-28d78af2-73f24c65'
// });

// mg.messages.create('sandbox7521fbad172a4ec3aa38ad7aa986b56e.mailgun.org', {
//     from: "Excited User <mailgun@sandbox7521fbad172a4ec3aa38ad7aa986b56e.mailgun.org>",
//     to: ["natasa.gajik@gmail.com"],
//     subject: "Hello",
//     text: "Testing some Mailgun awesomness!",
//     html: "<h1>Testing some Mailgun awesomness!</h1>"
// })

//     .then(msg => console.log(msg)) // logs response data
//     .catch(err => console.log(err)); // logs any error

const mailer = require('./pkg/mailer');

mailer.send(
    ['natasa.gajik@gmail.com'],
    'WELCOME',
    {
        name: 'Natasha Gajikj'
    }
);

mailer.send(
    ['natasa.gajik@gmail.com'],
    'RESET_PASSWORD',
    {
        name: 'Natasha Gajikj',
        link: 'http://google.com'
    }
);

mailer.send(
    ['natasa.gajik@gmail.com'],
    'NOTIFICATION',
    {
        name: 'Natasha Gajikj'
    }
);