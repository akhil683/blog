import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Missing = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 w-full gap-4">
    <div className="w-full h-56">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQzZdoiN5YcAXXl04oCuXBge4d__EFl0z41ULg2BGpJMSagoPuJ10WleYl0a3w3Q08PdRBwTAgnbWKgV7N8CqQStxRyIoMzKhI3VZQdUug9-Cq_J4GDad_9tLHd60G_zRMZusOKa8mVaHdSs_TKIdzXH-wNwnoLbpTTN3bA-0b-S1Z26Idy_PgMXs0Vw/s1536/404-errors-1536x891.png" alt="404 Not Found" className="w-full h-56 object-cover" />
    </div>
    <h2 className="text-black">Page Not Found</h2>
    <Link to="/">
      <Button name="Visit the Home Page" />
    </Link>
  </div>
  )
}

export default Missing
