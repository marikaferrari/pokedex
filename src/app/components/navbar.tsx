import Image from 'next/image';
import Link from 'next/link';

// Logo image
import logo from '../assets/pokedex.png';

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 max-h-20">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} height={130} width={130} alt="pokedex logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
