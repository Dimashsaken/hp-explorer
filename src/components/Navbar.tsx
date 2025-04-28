import Link from 'next/link';
import { FaHatWizard } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-amber-400">
              <FaHatWizard className="mr-2 text-2xl" />
              <span>Harry Potter Explorer</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/houses" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium">
                  Houses
                </Link>
                <Link href="/characters" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium">
                  Characters
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 