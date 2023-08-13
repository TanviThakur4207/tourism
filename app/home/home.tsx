'use client'
import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import AboutUs from '@/components/about';
import ContactUs from '@/components/contactus';
import SearchRide from '@/components/seachride';
interface Photo {
    source: string;
    alt: string;
}

const Home = () => {

    const [photos, setPhotos] = useState<Photo[]>([
        // Replace these URLs with your own image URLs
        { source: 'https://www.outlookindia.com/outlooktraveller/public/uploads/files/2015/03/110316124504-shimla3carousel.jpg', alt: 'Image 1' },
        { source: 'https://media.istockphoto.com/id/1182935983/photo/beautiful-shimla-himachal-pradesh.jpg?s=612x612&w=0&k=20&c=GCEzzGhFGIK8I4Tb6jkImaO6sQ7p6HN4oIpCUJ6s8AU=', alt: 'Image 2' },
        { source: 'https://www.vibrillhospitality.com/images/resort-upper-carousel-images/snow-shimla-2.jpg', alt: 'Image 3' },
    ]);


    const itemTemplate = (photo: Photo) => {
        return (
            <img src={photo.source} alt={photo.alt} className="object-cover w-full h-[23rem] "/>
        );
    };
    const handleExploreNowClick = () => {
        const searchRideSection = document.getElementById('search_ride');
        if (searchRideSection) {
            searchRideSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="p-4">
                <div className='relative'>
                    <Carousel value={photos} itemTemplate={itemTemplate} numVisible={1} numScroll={1} autoplayInterval={2050} />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
                        <h1 className="text-4xl font-bold mb-4 text-white">Discover the World</h1>
                        <h2 className="text-xl font-semibold mb-6 text-white">Your Ultimate Travel Companion</h2>
                        <p className="text-lg mb-4 text-white">
                            Book Your Dream Tours Today!
                        </p>
                        <button onClick={handleExploreNowClick} className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition duration-300">
                            Explore Now
                        </button>
                    </div>
                </div>
                <SearchRide />
                <div className="card flex items-center justify-center p-6 bg-gradient-to-r from-a8fffa to-251e1e rounded-lg">
                    <div className="mr-6">
                        <Image src="/remove.png" alt="Image" width="800" height="450" />
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">Discover the World, Embrace the Journey</p>
                    </div>
                </div>
                <AboutUs/>
                <ContactUs/>
            </div>

        </>
    );
};

export default Home;
