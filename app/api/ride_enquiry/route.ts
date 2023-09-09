import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../client/email_sender';
interface Data {
    name: string;
    phoneNumber: string;
    desc: string;
    source: string;
    destination: string;
    date: string;
}

export const POST = async (request: NextRequest) => {
    const rideDetails: Data = await request.json()
    const subject: string = "Ride Enquiry"
    let rideInquiryTemplate = `
  
  Dear  Trips in Himachal ,
  
  I hope this message finds you well. My name is ${rideDetails.name} and I'm reaching out to inquire about the possibility of arranging a ride.
  
  Details:
  - Date: ${rideDetails.date}
  - Pickup Location: ${rideDetails.source}
  - Destination: ${rideDetails.destination}
  - Special Requests: ${rideDetails.desc}
  
  I would appreciate it if you could provide me with more information about the availability, pricing, and any other relevant details for the ride on the specified date and time.
  
  Please feel free to contact me at +91${(rideDetails.phoneNumber).replace("-","")} if you need any further information or clarification.
  
  Thank you for your time and assistance. I'm looking forward to your response.
  
  Best regards,
  ${rideDetails.name}
  ${rideDetails.phoneNumber}
  `;
    try {
        await sendMail(subject, rideInquiryTemplate);
        return NextResponse.json("success")
    } catch (error) {
        console.error(error);
        return NextResponse.json("failed")
    }
}
