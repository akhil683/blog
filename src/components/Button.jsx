const Button = ({ name }) => {

  return (
    <button className='p-2 bg-red-800 hover:bg-red-700 rounded-md text-white'>
      {name}
    </button>
  )
}

export default Button
