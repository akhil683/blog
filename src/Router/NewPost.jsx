import React, { useState } from 'react'

const NewPost = ({ setposts, posts }) => {
  const [form, setForm] =  useState({
    title: '',
    author: '',
    thumbnail: '',
    data: '',
  });

  // const handleChange = (e) => {
  //   setForm({
  //     ...form, 
  //     [e.target.name] : e.target.value})
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(form);
  //      setposts({
  //       ...posts, 
  //       {...form, id: posts.length}
  //   });
  //   console.log(posts);
  // }

  return (
    <div className='bg-black flex flex-col p-6 justify-center'>

    <h2 className='text-3xl pb-2 text-center text-white'>New Post</h2>

    <form>
    <div className='p-6 flex flex-col justify-center gap-2 max-w-3xl'>

        <div className='flex justify-items-stretch w-full gap-2'>
          <input 
            type="text" 
            name='title'
            onChange={(e) => handleChange(e)}
            placeholder='Title' 
            className='w-1/2 p-2 rounded-sm outline-none focus:border-blue-400 border-2 border-transparent' 
          />
          <input 
            type="text" 
            name='author'
            onChange={(e) => handleChange(e)}
            placeholder='Author' 
            className='w-1/2 p-2 rounded-sm outline-none focus:border-blue-400 border-2 border-transparent' 
          />
        </div>

        <input 
          type="text" 
          name='thumbnail'
          onChange={(e) => handleChange(e)}
          placeholder='thumbnail' 
          className='w-full rounded-sm p-2 outline-none focus:border-blue-400 border-2 border-transparent' 
        />
        <textarea 
          name="data"
          onChange={(e) => handleChange(e)}
          cols="30" 
          rows="6" 
          placeholder='Blog Details' 
          className='p-2 rounded-sm outline-none focus:border-blue-400 border-2 border-transparent' 
        />
        <button className='bg-blue-600 p-2 my-2 text-white rounded-sm hover:bg-blue-700' type='submit'>SUBMIT</button>
    </div>

    </form>
    </div>
  )
}

export default NewPost;
