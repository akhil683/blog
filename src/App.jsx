import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './Router/About';
import Footer from './components/Footer';
import Home from './Router/Home';
import Missing from './components/Missing';
import Navbar from './components/Navbar';
import NewPost from './Router/NewPost';
// import Post from './components/Post';
import PostDetails from './components/PostDetails';

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Top 10 Best javascript frameworks of 2023',
      author: 'akhil',
      thumbnail: 'https://www.danielleskosky.com/wp-content/uploads/media-uploads/laptop-screen-blog.jpg',
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia at similique quam libero nam iste earum tempora dolor ipsum nesciunt consequuntur, laudantium impedit provident, cumque natus recusandae iusto! Exercitationem, necessitatibus eveniet nam vitae similique natus maxime quam illum asperiores cupiditate blanditiis tempore qum quibusdam libero vero doloribus harum qui necessitatibus error adipisci a vitae et hic, illum voluptas modi quis pariatur, excepturi eligendi? Sunt voluptate consequuntur, voluptatem laborum quidem veniam amet, eum exercitationem quam harum laudantium alias mollitia ad repellat placeat excepturi asperiores omnis voluptatum commodi magni? Exercitationem, necessitatibus incidunt. Repellendus architecto quaerat beatae nesciunt cupiditate corporis numquam eveniet atque, vel nam accusamus ad libero nihil molestiae quae sed accusantium dolor fugiat quisquam ab qui ratione eos blanditiis? Aut, minima facere a distinctio fugiat eius aspernatur? Voluptates earum enim ea perspiciatis quibusdam nesciunt, unde odio doloribus quasi exercitationem repellendus nemo accusantium laboriosam placeat. Sunt modi consequuntur corporis doloremque quidem. Enim eveniet amet cumque, quo ex non vero atque. Fuga quas et cum totam quidem? Hic ab incidunt, vitae nemo saepe mollitia libero illo ut optio? Delectus in, sequi quae excepturi dolor doloremque tenetur, voluptatem illum commodi nemo maxime ad itaque et eveniet! Tempore, ea adipisci temporibus, laudantium culpa officiis maiores quod magnam vero aperiam iste quia dolorum id sapiente eos reiciendis illo commodi porro praesentium ullam dolores minima, illum nisi. Nihil labore non quibusdam corporis, exercitationem rerum sequi. Repellendus minima corporis asperiores tempore? Nisi nemo quia magnam.",
    },
    {
      id: 2,
      title: 'Best Places to visit in Himachal Pradesh during New Year',
      author: 'akhil',
      thumbnail: 'https://thersilentboy.com/wp-content/uploads/2022/09/Blogging.jpeg',
      data: "xime quam illum asperiores cupiditate blanditiis tempore qum quibusdam libero vero doloribus harum qui necessitatibus error adipisci a vitae et hic, illum voluptas modi quis pariatur, excepturi eligendi? Sunt voluptate consequuntur, voluptatem laborum quidem veniam amet, eum exercitationem quam harum laudantium alias mollitia ad repellat placeat excepturi asperiores omnis voluptatum commodi magni? Exercitationem, necessitatibus incidunt. Repellendus architecto quaerat beatae nesciunt cupiditate corporis numquam eveniet atque, vel nam accusamus ad libero nihil molestiae quae sed accusantium dolor fugiat quisquam ab qui ratione eos blanditiis? Aut, minima facere a distinctio fugiat eius aspernatur? Voluptates earum enim ea perspiciatis quibusdam nesciunt, unde odio doloribus quasi exercitationem repellendus nemo accusantium laboriosam placeat. Sunt modi consequuntur corporis doloremque quidem. Enim eveniet amet cumque, quo ex non vero atque. Fuga quas et cum totam quidem? Hic ab incidunt, vitae nemo saepe mollitia libero illo ut optio? Delectus in, sequi quae excepturi dolor doloremque tenetur, voluptatem illum commodi nemo maxime ad itaque et eveniet! Tempore, ea adipisci temporibus, laudantium culpa officiis maiores quod magnam vero aperiam iste quia dolorum id sapiente eos reiciendis illo commodi porro praesentium ullam dolores minima, illum nisi. Nihil labore non quibusdam corporis, exercitationem rerum sequi. Repellendus minima corporis as",
    },
    {
      id: 3,
      title: 'blog 3',
      author: 'akhil',
      thumbnail: 'https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg',
      data: "this is blog number 3",
    },
    {
      id: 4,
      title: 'blog 4',
      author: 'akhil',
      thumbnail: 'https://www.intentsify.io/hubfs/shutterstock_572386132-min.jpg',
      data: "this is blog number 4",
    },
  ]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Navbar 
        posts={posts}
        setPosts={setPosts}
        searchResults={searchResults} 
        setSearchResults={setSearchResults} 
      />
      <Routes>
        <Route path='/' element={<Home filteredBlogs={searchResults} />} />
        <Route path='/newpost' element={<NewPost posts={posts} setposts={setPosts} />} />
        <Route path='/posts/:id' element={<PostDetails posts={posts} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>   
      <Footer />
    </>
  )
}

export default App;
