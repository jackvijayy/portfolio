import { Github, Instagram, Package } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-gray-700 p-2'>
        <div className='flex justify-between itens-center'>
            <p className='text-gray-700 text-xs lg:text-md'>@copyright Vijay</p>
            <div className='flex gap-5'>
              <a href=""></a>
              <Instagram/>
              <Github/>
              <Package/>

            </div>
        </div>

    </div>
  )
}

export default Footer