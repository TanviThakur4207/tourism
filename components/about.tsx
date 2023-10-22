/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Image } from 'primereact/image';

const AboutUs = () => {
  return (
    <>
      <div className="top-[80rem] left-0 min-h-screen flex flex-col items-center justify-center py-10 bg-about bg-center" id='about' >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-black">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-500">About Trips In Himachal</h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Trips In Himachal is a premier car rental service dedicated to providing a delightful travel experience in the breathtaking landscapes of the Himalayas.
            </p>
            <p className="text-lg md:text-xl mb-6 text-white">
              Whether you want to explore the picturesque valleys or conquer the challenging mountain passes, we have a wide range of well-maintained cars and experienced drivers to make your journey safe and enjoyable.
            </p>
            <p className="text-lg md:text-xl mb-6 text-white">
              Our mission is to ensure that every traveler who chooses us experiences the beauty of the Himalayas without any worries, creating memories that last a lifetime.
            </p>
            <p className="text-lg md:text-xl mb-6 text-white">
              With a focus on safety, comfort, and reliability, we have earned the trust of thousands of travelers who have embarked on unforgettable journeys with us.
            </p>
            <p className="text-lg md:text-xl mb-6 text-white">
              Join us on a magical ride through the mystical land of the Himalayas and immerse yourself in the natural wonders that the region has to offer.
            </p>
            <p className="text-lg md:text-xl mb-6 text-white">
              Contact us today to book your next adventure with Trips In Himachal !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
