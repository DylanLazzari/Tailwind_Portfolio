import Head from 'next/head'
import {BsFillMoonStarsFill, BsGithub} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin,} from 'react-icons/ai'
import Image from 'next/Image'
import dylan from '../public/dylan_avatar.png'
import adp from '../public/adp-logo.jpeg'
import code from '../public/code.png'
import consult from '../public/consulting.png'
import design from '../public/design.png'

{/*First page*/}
export default function Home() {
  return (
    <div>
      <Head>
        <title>Dylan Lazzari Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10'>
        <section className='h-screen'>
          <nav className='py-10 mb-12 flex justify-between'> 
            <h1 className='text-xl font-burtons'>developedbydylan</h1>
            <ul className=' flex items-center'>
              <li> <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
              </li>
              <li>
                 <a className='bg-gradient-to-r from-stone-800 to-stone-400 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-stone-700 font-medium'>Dylan Lazzari</h2>
            <h3 className='text-2xl py-2 '>Software Engineer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Hello! My name is Dylan Lazzari and I am a Software Engineering student at the University of Delaware, with a focus in CISC. Thank you for coming to my Virtual Portfolio!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-stone-600'>
            <AiFillLinkedin />
            <AiFillInstagram />
            <BsGithub />
          </div>
          <div className='relative mx-auto  bg-gradient-to-b from-stone-800 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src ={dylan} layout= "fill" objectFit='cover' />
          </div>
        </section>
{/*Second Page*/}
        <section>
          <div>
            <h3 className=' text-3xl  text-stone-700 py-10'>About Me</h3>
            <p className='text-md leading-8 text-stone-700 '>
               {/*throw somethingliek <span class namem color/wor/ />span in here for highlights*/}

            </p>
          </div>
          <div>
            <h3 className='text-3xl  text-stone-700 py-10'>Experience</h3>
            <div>
              <Image src={adp} width={100} height={100}/>
              <h3 className='text-stone-700 py-1'>Automatic Data Processig</h3>
              <p className='text-stone-700 py-1'> ●	Aided in completion and Deployment of The Voice of the Employee survey software. <br />
                  ●	Developed data storing templates for surveys using SQL and Python. <br />
                  ●	Maintained and unit Tested API’s using Python and Amazon Web Services. <br />
                  ●	Meticulously tracked and maintained ticket completion during current sprints using Jira and SCRUM.
              </p>
              <h3 className=' py-4 text-stone-800'>Languages used</h3>
              <p className='text-stone-700 py-1'>SQL</p>
              <p className='text-stone-700 py-1'>python</p>

            </div>
          </div>
        </section>
      </main>

    </div>
    
  )
}
