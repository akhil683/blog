import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';

import About from './Router/About';
import Footer from './components/Footer';
import Home from './Router/Home';
import Missing from './components/Missing';
import Navbar from './components/Navbar';
import NewPost from './Router/NewPost';
import PostDetails from './components/PostDetails';
import api from './api/post'

const App = () => {

  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { width } = useWindowSize();

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
  useEffect(() => {
    setPosts(data);
  }, [data])

  return (
    <>
      <Navbar 
        width={width}
        posts={posts}
        setPosts={setPosts}
        searchResults={searchResults} 
        setSearchResults={setSearchResults} 
      />
      <Routes>
        <Route path='/' 
          element={<Home 
            filteredBlogs={searchResults} 
            fetchError={fetchError} 
            isLoading={isLoading} 
        />} 
        />
        <Route path='/newpost' 
          element={<NewPost 
            posts={posts} 
            setposts={setPosts} />} 
        />
        <Route path='/posts/:id' 
          element={<PostDetails posts={posts} />} 
        />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>   
      <Footer />
    </>
  )
}

export default App;
