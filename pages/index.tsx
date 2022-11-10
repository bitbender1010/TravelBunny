import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PageHead from '../components/utils/PageHead';
import CityImg from '../assets/images/ik.png';
import NavBar from '../components/blocks/NavBar';

const Card = dynamic(() => import('../components/blocks/Card'));

const Home = () => {
  const cities = [
    {
      id: 0,
      img: CityImg,
      resortName: 'Ikogosi Warm Spring Resort',
      resortLocation: 'Ekiti State, Nigeria',
      resortRating: '4.8 | 67 Reviews',
    },
    {
      id: 1,
      img: CityImg,
      resortName: 'Ikogosi Warm Spring Resort',
      resortLocation: 'Ekiti State, Nigeria',
      resortRating: '4.8 | 67 Reviews',
    },
    {
      id: 2,
      img: CityImg,
      resortName: 'Ikogosi Warm Spring Resort',
      resortLocation: 'Ekiti State, Nigeria',
      resortRating: '4.8 | 67 Reviews',
    },
    {
      id: 3,
      img: CityImg,
      resortName: 'Ikogosi Warm Spring Resort',
      resortLocation: 'Ekiti State, Nigeria',
      resortRating: '4.8 | 67 Reviews',
    },
  ];

  return (
    <>
      <PageHead title='Travel Bunny' />
      <div>
        <NavBar />
        <main className='main container mx-auto my-4'>
          <div className='cities my-8'>
            <div className='heading flex items-center justify-between'>
              <h1 className='font-semibold'>Explore cities</h1>
              <Link href='/all-cities'>See all</Link>
            </div>
            <div className='grid grid-cols-4 gap-8 my-8'>
              {cities.map(
                ({
                  id,
                  img,
                  resortName,
                  resortLocation,
                  resortRating,
                }: any) => (
                  <Card
                    key={id}
                    img={img}
                    resortName={resortName}
                    resortLocation={resortLocation}
                    resortRating={resortRating}
                  />
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
