import React from 'react';
import { Image } from 'primereact/image';

const AboutUs = () => {
  return (
    <>
      <div className='relative' id="about">
        <Image src='about.jpg' className='opacity-50 w-full h-auto'>
        </Image>
      </div>

      <div className="absolute top-[80rem] ml-[220px] left-0 min-h-screen flex flex-col items-center justify-center py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-black">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Himalayan Tourist Car Rides</h1>
            <p className="text-lg md:text-xl mb-6">
              Himalayan Tourist Car Rides is a premier car rental service dedicated to providing a delightful travel experience in the breathtaking landscapes of the Himalayas.
            </p>
            <p className="text-lg md:text-xl mb-6">
              Whether you want to explore the picturesque valleys or conquer the challenging mountain passes, we have a wide range of well-maintained cars and experienced drivers to make your journey safe and enjoyable.
            </p>
            <p className="text-lg md:text-xl mb-6">
              Our mission is to ensure that every traveler who chooses us experiences the beauty of the Himalayas without any worries, creating memories that last a lifetime.
            </p>
            <p className="text-lg md:text-xl mb-6">
              With a focus on safety, comfort, and reliability, we have earned the trust of thousands of travelers who have embarked on unforgettable journeys with us.
            </p>
            <p className="text-lg md:text-xl mb-6">
              Join us on a magical ride through the mystical land of the Himalayas and immerse yourself in the natural wonders that the region has to offer.
            </p>
            <p className="text-lg md:text-xl mb-6">
              Contact us today to book your next adventure with Himalayan Tourist Car Rides!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
