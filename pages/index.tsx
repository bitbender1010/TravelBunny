import Head from 'next/head';
import Link from 'next/link';
import PageHead from '../components/utils/PageHead';
import style from '../styles/create.module.css';

const SignUp = () => (
  <div>
    <PageHead title='Sign Up | travel Bunny' />

    <main className={style.main}>
      <div className={style.rightBa}>
        <div className={style.right}>
          <Link href='/' className={style.logo}>
            <img src='/logo.png' alt='logo' /> <span>TravelBunny</span>
          </Link>

          <h2>Create a TravelBunny account</h2>
          <p className=''>
            Explore beautiful locations around the world and organize trips with
            friends, and friendly strangers.
          </p>

          <div className={style.input}>
            <input
              type='text'
              placeholder='Username'
              className='text-base placeholder:text-base'
            />
          </div>
          <div className={style.input}>
            <input
              type='email'
              placeholder='Email'
              className='text-base placeholder:text-base'
            />
          </div>
          <div className={style.input}>
            <input
              type='text'
              placeholder='Password'
              className='text-base placeholder:text-base'
            />
          </div>

          <button type='button' className='mb-4'>
            <Link href='/login'>Create Account</Link>
          </button>
          <p className={style.login}>
            Don&lsquo;t have a TravelBunny <br /> account?
            <Link
              className={`underline hover:underline ${style.loginC}`}
              href='/login'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className={style.leftBa}>
        <img src='/tra3.png' alt='' />
      </div>
    </main>
  </div>
);

export default SignUp;
