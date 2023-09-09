'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
    const router = useRouter();

    const handleAboutUsClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactUsClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="flex flex-col md:flex-row justify-center p-4 sticky top-0 left-0 right-0 z-[999] bg-cyan-600">
            <div className='flex justify-between w-full md:w-[70rem] p-2'>

                <div className="mb-4 md:mb-0">
                    <h1 className='text-white font-mono font-bold'>
                        TRIPS IN HIMACHAL
                    </h1>
                </div>

                <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <div onClick={() => router.push("/home")}>
                            <span className="text-black hover:text-gray-500 px-2 py-1 rounded cursor-pointer transition-colors duration-300">Home</span>
                        </div>
                    </li>
                    <li>
                        <div onClick={handleAboutUsClick}>
                            <span className="text-black hover:text-gray-500 px-2 py-1 rounded cursor-pointer transition-colors duration-300">About</span>
                        </div>
                    </li>
                    <li>
                        <div onClick={handleContactUsClick}>
                            <span className="text-black hover:text-gray-500 px-2 py-1 rounded cursor-pointer transition-colors duration-300">Contact</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
