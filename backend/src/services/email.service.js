require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Via Bank" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistrationEmail(userEmail, name) {

    const subject = "Welcome to Via Bank 🎉";

    const text = `
Hello ${name},

Welcome to Via Bank!

Your account has been successfully created and is now active.

Thank you for choosing Via Bank.

Regards,
Via Bank Team
`;

    const html = `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
        <div style="background:#0f172a; color:white; padding:20px; text-align:center;">
            <h1>🏦 Via Bank</h1>
        </div>

        <div style="padding:25px;">
            <h2>Hello ${name},</h2>

            <p>Welcome to <strong>Via Bank</strong>.</p>

            <p>Your account has been successfully registered and activated.</p>

            <p>You can now securely access our banking services.</p>

            <p>
                Regards,<br>
                <strong>Via Bank Team</strong>
            </p>
        </div>
    </div>
    `;

    await sendEmail(userEmail, subject, text, html);
}

async function sendTransactionEmail(
    userEmail,
    name,
    amount,
    transactionType,
    balance
) {

    const subject = "Transaction Successful ✅";

    const text = `
Hello ${name},

Your transaction has been completed successfully.

Transaction Type: ${transactionType}
Amount: ₹${amount}
Available Balance: ₹${balance}

Thank you for banking with Via Bank.

Regards,
Via Bank Team
`;

    const html = `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
        
        <div style="background:#166534; color:white; padding:20px; text-align:center;">
            <h1>✅ Transaction Successful</h1>
        </div>

        <div style="padding:25px;">
            <h2>Hello ${name},</h2>

            <p>Your banking transaction was processed successfully.</p>

            <table style="width:100%; border-collapse:collapse;">
                <tr>
                    <td><strong>Transaction Type</strong></td>
                    <td>${transactionType}</td>
                </tr>

                <tr>
                    <td><strong>Amount</strong></td>
                    <td>₹${amount}</td>
                </tr>

                <tr>
                    <td><strong>Available Balance</strong></td>
                    <td>₹${balance}</td>
                </tr>
            </table>

            <br>

            <p>
                Thank you for banking with Via Bank.
            </p>

            <p>
                Regards,<br>
                <strong>Via Bank Team</strong>
            </p>
        </div>
    </div>
    `;

    await sendEmail(userEmail, subject, text, html);
}

async function sendTransactionFailureEmail(
    userEmail,
    name,
    amount,
    transactionType,
    reason
) {

    const subject = "Transaction Failed ❌";

    const text = `
Hello ${name},

We were unable to process your transaction.

Transaction Type: ${transactionType}
Amount: ₹${amount}

Reason:
${reason}

Please try again or contact support.

Regards,
Via Bank Team
`;

    const html = `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
        
        <div style="background:#dc2626; color:white; padding:20px; text-align:center;">
            <h1>❌ Transaction Failed</h1>
        </div>

        <div style="padding:25px;">
            <h2>Hello ${name},</h2>

            <p>Unfortunately, your transaction could not be completed.</p>

            <table style="width:100%; border-collapse:collapse;">
                <tr>
                    <td><strong>Transaction Type</strong></td>
                    <td>${transactionType}</td>
                </tr>

                <tr>
                    <td><strong>Amount</strong></td>
                    <td>₹${amount}</td>
                </tr>

                <tr>
                    <td><strong>Reason</strong></td>
                    <td>${reason}</td>
                </tr>
            </table>

            <br>

            <p>
                If you believe this is an error, please contact our support team.
            </p>

            <p>
                Regards,<br>
                <strong>Via Bank Team</strong>
            </p>
        </div>
    </div>
    `;

    await sendEmail(userEmail, subject, text, html);
}

module.exports = {
    sendEmail,
    sendRegistrationEmail,
    sendTransactionEmail,
    sendTransactionFailureEmail
};