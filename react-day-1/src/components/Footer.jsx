

const Footer = () => {
  return (
    <div className='bg-black text-amber-50 my-3'>
      <div className='flex justify-center gap-3'>
        <h3>Follow us on</h3>
        <ul className='flex gap-3'>
            <li className='hover:text-blue-500'><a href="#">Facebook</a></li>
            <li className='hover:text-pink-600'><a href="#">Instagram</a></li>
            <li className='hover:text-blue-400'><a href="#">LinkedIn</a></li>
            <li className='hover:text-indigo-500'><a href="#">Twitter/X</a></li>
        </ul>
      </div>

      <p className="font-serif text-end my-0.5">&copy; 2025 Mini Ride . All rights reserved. | Terms of Service | Privacy Policy
</p>
    </div>
  )
}

export default Footer
