
import nodemailer from 'nodemailer';

export const sendMail = async (subject:string , message:string ) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sahil.kumar@redbasil.in',
            pass: 'isipqdnvvmzapyrd',
        },
    });

    const mailOptions = {
        from: 'sahil.kumar@redbasil.in',
        to: 'sahilkumarsml@gmail.com',
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