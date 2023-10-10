'use client'
import React, { useState } from 'react';
import { Image } from 'primereact/image';
import axios from 'axios';
const ContactUs = () => {
    const [formData, setFormData] = useState<any>({
        name: "",
        email: '',
        date: '',
        desc : ''
    })
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async () => {
        formData.date = new Date().toLocaleDateString()
        try {
            await axios.post("/api/contact_us", formData);
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error if needed
        }
    };
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-between items-center py-10 bg-cyan-600 opticity-50" id="contact">
            <div className="md:w-1/2 md:flex flex-col justify-center items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
                    <p className="text-black text-lg mb-6">
                        Thank you for your interest in Himalayan Tourist Car Rides. If you have any questions or inquiries, please feel free to get in touch with us using the contact details below.
                    </p>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-black mb-2">Address:</h2>
                            <p className="text-black text-lg mb-4">
                                123 Main Street,
                                <br />
                                Kathmandu, Nepal
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-black mb-2">Contact Information:</h2>
                            <p className="text-black text-lg mb-4">
                                Email: info@himalayantouristcarrides.com
                                <br />
                                Phone: +977-123-456-7890
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-black mb-2">Send us a message:</h2>
                        <form>
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 mb-4 md:mr-2">
                                    <input type="text" value={formData.name} onChange={handleChange} id='name' name='name' placeholder="Name" className="w-full p-3 border rounded-lg" required/>
                                </div>
                                <div className="md:w-1/2 mb-4 md:ml-2">
                                    <input type="email" value={formData.email} onChange={handleChange} id='email' name='email' placeholder="Email" className="w-full p-3 border rounded-lg" required/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Message" value={formData.desc} onChange={handleChange} name='desc' className="w-full p-3 border rounded-lg" required></textarea>
                            </div>
                            <button type="submit" onClick={()=> handleSubmit()} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-content-center items-center">
                <div className="card">
                    <Image src="/my_location.png" alt="Image" width="500"/>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;
