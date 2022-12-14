import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import { HiOutlineCalendar, HiOutlineUserCircle } from 'react-icons/hi';
import { BsCreditCard } from 'react-icons/bs';
import Link from 'next/link';

type Props = {
  img: any;
  resortName: string;
  resortDescription: string;
  resortLocation: string;
  resortPrice: string;
  tourDate: string;
  tourAgent: string;
};

const GroupCard = ({
  img,
  resortName,
  resortDescription,
  resortLocation,
  resortPrice,
  tourDate,
  tourAgent,
}: Props) => (
  <Link
    href='/group'
    className='flex flex-col md:flex-row p-8 rounded-xl shadow-2xl md:h-[420px] w-full justify-between space-y-6 md:space-x-8 md:space-y-0'
  >
    <div className='relative h-[100%] md:w-[50%] rounded-xl transition ease-in-out duration-800 hover:scale-105'>
      <Image
        src={img}
        alt='gourpTrip__image'
        className='object-cover w-full h-full shadow md:absolute rounded-xl'
        loading='lazy'
        fill
      />
    </div>
    <div className='flex flex-col space-y-8 md:w-8/12 details justify-self-start'>
      <div className='space-y-4'>
        <h3 className='text-xl font-semibold cursor-pointer hover:underline'>
          {resortName}
        </h3>
        <p className='text-base'>{resortDescription}</p>
      </div>

      <div className='space-y-4'>
        <div className='flex items-center justify-start space-x-2'>
          <GoLocation size={20} />
          <p>{resortLocation}</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <HiOutlineUserCircle size={20} />
          <p>{tourAgent}</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <HiOutlineCalendar size={20} />
          <p>{tourDate}</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
          <BsCreditCard size={20} />
          <p>₦ {resortPrice}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default GroupCard;
