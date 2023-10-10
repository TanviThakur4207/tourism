
import nodemailer from 'nodemailer';

export const sendMail = async (subject:string , message:string ) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.TRANSPORTEMAILID,
            pass: process.env.TRANSPORTEMAILPASS,
        },
    });

    const mailOptions = {
        from: process.env.TRANSPORTEMAILID,
        to: process.env.MAILRECEIVERID,
        subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return 200
    } catch (e) {
        console.log(e)
    }
}