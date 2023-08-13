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
        <nav className="flex justify-center p-4 sticky top-0 left-0 right-0 z-[999]">
            <ul className="flex items-center space-x-4">
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
        </nav>
    );
};

export default Navbar;
