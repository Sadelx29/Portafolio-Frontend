import React from 'react'
import iconoMio from '../assets/img/iconoMio.webp'
import IconoLI from '../icons/IconoLI'
import IconoGH from '../icons/IconoGH'
import NumContact from '../icons/NumContact'
import MailContact from '../icons/MailContact'
import LocContact from '../icons/LocContact'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer class="text-center lg:text-left bg-gray-100 text-gray-600">
  
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="">
        <h6 class="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
              <img  className='w-[80px] h-[80px]' src={iconoMio}/>
          
        </h6>
      
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div class="">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Testimonials 
        </h6> 
        <p>
          Here You can see what think about me and my grown like software developer  
        </p>
      </div>
      <div class="">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Projects
        </h6>
        <p>Here yoou can see my projects finished and y progress</p>
      </div>
      <div class="">

      <Link className='uppercase font-semibold mb-4 flex justify-center md:justify-start'
        to='/contact'>Contact
      </Link>
        <LocContact/>
        <MailContact/>
        <NumContact/> 
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center  p-6 border-b border-gray-300">
    <div class="flex justify-center items-center">
      <a href="https://www.linkedin.com/in/sadel-fortunato-86a22a1b4/" class="mr-6 text-gray-600">
        <IconoLI/>
      </a>
      <a href="https://github.com/Sadelx29?tab=repositories" class="text-gray-600">
        <IconoGH/>
        
      </a>
    </div>
  </div>
  <div class="text-center p-6 bg-gray-200">
    <span>© 2022 Copyright: </span>
    <a class="text-gray-600 font-semibold" href="https://github.com/Sadelx29?tab=repositories">Sadel Fortunato</a>
  </div>
  
</footer>


    </>
  )
}

export default Footer