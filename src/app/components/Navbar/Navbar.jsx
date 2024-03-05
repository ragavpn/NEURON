import N from '@assets/N.svg';
import Image from 'next/image';
import { Searchbar } from '../Searchbar/Searchbar';

function Navbar() {
  return (
    <div className="flex justify-between w-[100%]" >
      <div className='flex flex-row items-center justify-between text-2xl w-[60%]'>
        <Image src={N} alt="N logo" />
        <p> Home </p>
        <p> About</p>
        <p> FAQ's</p>
      </div>
      <div className='right'>
        <Searchbar />
      </div>
    </div>
  );
}

export default Navbar;