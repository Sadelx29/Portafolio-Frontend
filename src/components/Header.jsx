import React, {useState} from 'react'
import { Link } from "react-router-dom";
import imagenSaludo from '../assets/img/saludo.webp'


const Header = () => {
  const [open, setOpen] = useState(true)


  return (
    <>
      <div className=''>
        <nav className='block p-5 bg-white shadow md:flex md:items-center md:justify-between'>
          <div className='flex justify-between items-center' >
            <span className='text-2x1 font-[Poppins] cursor-pointer'>
            <Link className='uppercase rounded-xl hover:text-cyan-500 duration-500'
                to='/' ><img className='h-[80px] w-[80px] inline' src={imagenSaludo}/>
              </Link>

            </span>
            <span className='text-3xl cursor-pinter mx-2 md:hidden block '>
              <ion-icon name="menu"  onClick={(e) =>{setOpen(!open)}}></ion-icon>
            </span>
          </div>
          <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full    left-0 md:w-auto md:py-0 py-4  md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
            <li className='mx-4 text-xl my-6 md:my-0'>
              <Link className='uppercase rounded-xl hover:text-cyan-500 duration-500'
                to='/about'>About
              </Link>
            </li>
            <li className='mx-4 text-xl my-6 md:my-0'>
              <Link className='uppercase rounded-xl hover:text-cyan-500 duration-500'
                to='/contact'>Contact
              </Link>
            </li>
            <li className='mx-4 text-xl my-6 md:my-0'>
              <Link className='uppercase rounded-xl hover:text-cyan-500 duration-500'
                to='/projects'>Projects
              </Link>
            </li>
            <li className='mx-4 text-xl my-6 md:my-0'>
              <Link className='uppercase rounded-xl hover:text-cyan-500 duration-500'
                to='/testimonials'>Testimonials
              </Link>
            </li>
          </ul>

        </nav>
      </div>
    </>
  )
}

export default Header