/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import AboutUs from '@/components/about';
import ContactUs from '@/components/contactus';
import SearchRide from '@/components/seachride';
import Navbar from '@/components/navbar';
import axios from 'axios';
interface Photo {
    source: string;
    alt: string;
}

const Home = () => {
    const [crousalTime, setCrousalTime] = useState<number>(2150);
    const [photos, setPhotos] = useState<Photo[]>([
        // Replace these URLs with your own image URLs
        { source: 'crousal_photos/photo1.jpg', alt: 'Image 1' },
        { source: 'crousal_photos/photo2.jpg', alt: 'Image 2' },
        { source: 'crousal_photos/photo3.jpg', alt: 'Image 3' },
    ]);
    const [isSearchRide, setIsSearchRide] = useState<boolean>(false);
    const [isPhoneScreen, setIsPhoneScreen] = useState<Boolean>();

    const itemTemplate = (photo: Photo) => {
        return (
            <img src={photo.source} alt={photo.alt} className="object-cover w-full h-[23rem] " />
        );
    };
    const handleExploreNowClick = () => {
        const searchRideSection = document.getElementById('search_ride');
        if (searchRideSection) {
            searchRideSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        city: '',
        requirement: ''
    });
    useEffect(() => {
        const windowSize = () => {
          if (window.innerWidth <= 768) {
            setIsPhoneScreen(true);
          } else {
            setIsPhoneScreen(false);
          }
        };
    
        window.addEventListener("resize", () => {
          windowSize();
        });
    
        windowSize();
      }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log('formData :>> ', formData);
            await axios.post("/api/rapid_enquiry", formData)
            alert("Rapid Enquiry Submitted Successfully!")
        } catch (error) {
            console.log('error :>> ', error);
        }
    };

    useEffect(() => {
        setCrousalTime(2154)
    }, []);
    function handleToggleForm(): void {
        setIsSearchRide(!isSearchRide)
    }

    return (
        <>
            <div>
                {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center z-100 mt-[30px] flex flex-wrap"> */}
                <Navbar />
                {/* </div> */}
                <div className='relative' style={{ backgroundImage: 'url("sky.jpeg")' }}>
                    <Carousel value={photos} itemTemplate={itemTemplate} numVisible={1} numScroll={1} autoplayInterval={crousalTime} className='carousel-image' />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-center flex-wrap">
                        <h1 className="text-4xl font-bold mb-4 text-white">Discover the World</h1>
                        <h2 className="text-xl font-semibold mb-6 text-white">Your Ultimate Travel Companion</h2>
                        <p className="text-lg mb-4 text-white">
                            Book Your Dream Tours Today!
                        </p>
                        <button onClick={handleExploreNowClick} className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition duration-300">
                            Explore Now
                        </button>

                        <div className={`pb-2 bg-slate-800 bg-opacity-50 rounded-lg ${isPhoneScreen ? "mt-[2rem]" : "mt-[12rem]"} `}>
                            <div className={`flex gap-4 ${isSearchRide ? "bg-blue-500" : "bg-neutral-500"} w-[20%] rounded-full mt-[-8px] ml-[-8px]`}>
                                <div className={`${isSearchRide ? "bg-neutral-500" : "bg-blue-500"} p-[8px] rounded-full cursor-pointer font-medium`} onClick={() => handleToggleForm()}>
                                    Rapid Enquiry
                                </div>
                                <div className={`p-[8px] ${isSearchRide ? "bg-blue-500" : "bg-neutral-500"} rounded-full cursor-pointer font-medium`} onClick={() => handleToggleForm()}>
                                    Search Ride
                                </div>
                            </div>
                            {!isSearchRide ? <form onSubmit={handleSubmit} className="mt-4 flex gap-4 p-4 ">
                                <div className='flex flex-wrap gap-4'>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                        Name:*
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Enter Your name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border rounded-md py-2 px-3 w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="number">
                                        Phone No. :*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder='Enter Your Number'
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="border rounded-md py-2 px-3 w-full "
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                        Email:*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Enter Your Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border rounded-md py-2 px-3 w-full"
                                        required
                                    />
                                </div>
                                </div>
                                <div className='flex flex-wrap gap-4'>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="city">
                                        City:
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder='Enter Your City'
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="border rounded-md py-2 px-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="requirement">
                                        Requirement:
                                    </label>
                                    <input
                                        type="text"
                                        id="requirement"
                                        name="requirement"
                                        placeholder='Enter Your Requirement'
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        className="border rounded-md py-2 px-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">

                                    <button
                                        type="submit"
                                        className="w-[100%] bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600 h-[62%] mt-[27px]"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                                </div>
                            </form>
                                :
                                <div className={`${isPhoneScreen ? "" : "w-[77rem]"}`}>
                                <SearchRide />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="card flex items-center justify-center p-6 bg-gradient-to-r from-a8fffa to-251e1e rounded-lg">
                    <div className="mr-6">
                        <Image src="/remove.png" alt="Image" width="800" height="450" />
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">Discover the World, Embrace the Journey</p>
                    </div>
                </div>
                <AboutUs />
                <ContactUs />
            </div>

        </>
    );
};

export default Home;
