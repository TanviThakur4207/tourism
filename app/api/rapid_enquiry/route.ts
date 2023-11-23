import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../client/email_sender';
interface Data {
    name: string;
    phoneNumber: string;
    email: string;
    city: string;
    requirement: string;
}

export const POST = async (request: NextRequest) => {
    const enquiryDetails: Data = await request.json()
    const subject: string = "Rapid Inquiry"
    let rapidInquiryTemplate = `
  
  Dear  Trips in Himachal ,
  
  I hope this message finds you well. I'm reaching out to inquire about the following data specifications:
    Details : 
    - Name: ${enquiryDetails.name}
    - Phone Number: ${enquiryDetails.phoneNumber}
    - Email Address: ${enquiryDetails.email}
    - City: ${enquiryDetails.city}
    - Specific Requirements: ${enquiryDetails.requirement}

    We're in the process of gathering pertinent information and your prompt response would be greatly appreciated. If there are any additional details or clarifications needed, please don't hesitate to reach out.

Thank you for your attention to this matter.
  
  Best regards,
  ${enquiryDetails.name}
  ${enquiryDetails.phoneNumber}
  `;
    try {
        await sendMail(subject, rapidInquiryTemplate);
        return NextResponse.json("success")
    } catch (error) {
        console.error(error);
        return NextResponse.json("failed")
    }
}
