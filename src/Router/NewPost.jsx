import { useState } from 'react';
import {format } from 'date-fns';

const NewPost = ({ setposts, posts }) => {

  const [form, setForm] =  useState({
    title: '',
    author: '',
    thumbnail: '',
    data: '',
    datetime: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'dd MMMM, yyyy');
    const newPost = {
      id, 
      title: form.title, 
      author: form.author,
      thumbnail: form.thumbnail,
      data: form.data,
      datetime
    }
    try {
      const response = await api.post('/posts', newPost); 
      setposts([...posts, response.data]);
      setForm({
        title: '',
        author: '',
        thumbnail: '',
        data: '',
        datetime: '',
      })
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <div className='bg-black flex flex-col p-6 justify-center items-center'>

    <h2 className='text-3xl pb-2 text-center text-white'>New Post</h2>

    <form onSubmit={(e) => handleSubmit(e)} >
    <div className='p-6 flex flex-col justify-center gap-2 max-w-3xl'>

        <div className='flex justify-items-stretch w-full gap-2'>
          <input 
            type="text" 
            name='title'
            value={form.title}
            required
            onChange={(e) => handleChange(e)}
            placeholder='Title' 
            className='w-1/2 p-2 rounded-sm outline-none focus:border-blue-400 border-2 border-transparent' 
          />
          <input 
            type="text" 
            name='author'
            value={form.author}
            required
            onChange={(e) => handleChange(e)}
            placeholder='Author' 
            className='w-1/2 p-2 rounded-sm outline-none focus:border-blue-400 border-2 border-transparent' 
          />
        </div>

        <input 
          type="text" 
          name='thumbnail'
          value={form.thumbnail}
          required
          onChange={(e) => handleChange(e)}
          placeholder='thumbnail' 
          className='w-full rounded-sm p-2 outline-none focus:border-blue-400 border-2 border-transparent' 
        />
        <textarea 
          name="data"
          value={form.data}
          onChange={(e) => handleChange(e)}
          required
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
