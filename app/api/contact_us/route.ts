import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../client/email_sender';
interface Data {
    name: string;
    email: string;
    desc: string;
    date: string;
}

export const POST = async (request: NextRequest) => {
    const contractDetails: Data = await request.json()
    const subject: string = "Contact Us"
    let contactTemplate = `
    Hello,
    
    I hope this message finds you well. I am reaching out to you through the contact form on your website to inquire about the following:
    
    Name: ${contractDetails.name}
    Email: ${contractDetails.email}
    
    Message:
    ${contractDetails.desc}
    
    Please respond to my inquiry at your earliest convenience. You can reach me at the provided email address.
    
    Thank you for your attention and assistance. I look forward to hearing from you soon.
    
    Best regards,
    ${contractDetails.name}
  `;
    try {
        await sendMail(subject, contactTemplate);
        return NextResponse.json("success")
    } catch (error) {
        console.error(error);
        return NextResponse.json("failed")
    }
}
