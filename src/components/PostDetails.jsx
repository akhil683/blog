import { useParams, Link } from "react-router-dom";
import Button from "./Button";

const PostDetails = ({ posts }) => {

  const { id } = useParams();
  const post = posts.find(post => post.id == id);

  const handleDelete = (id) => {
    
  }

  return (
    <article className="p-2 max-w-2xl m-auto text-white">
      {post && 
        <>
          <div className="relative w-full h-40 mb-4">

            <img src={post.thumbnail} alt="post.title" className="w-full h-40 object-cover"/>

            <div className="bg-[#1e1e1e91] w-full h-40 p-2 absolute top-0">
              <p className="text-gray-200 mb-2 text-sm">26 April, 2023</p>
              <h2 className="text-3xl">{post.title}</h2>
              <p className="text-xl absolute bottom-3 right-3 text-green-200">By {post.author}</p>
            </div>    

          </div>

          <p className="text-xl text-justify text-black">{post.data}</p>

          <button className="text-black" onClick={handleDelete(post.id)}>
            Delete
          </button>

          <div className="flex justify-between">
            <Link to={`/posts/${post.id - 1}`}>
              <Button name="<< Previous Page" />
            </Link>
            <Link to={`/posts/${post.id + 1}`}>
              <Button name="Next Page >>" />
            </Link>
          </div>

        </>
      }
      {!post && 
        <div className="flex flex-col justify-center items-center p-6 w-full gap-4">
          <div className="w-full h-56">

          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQzZdoiN5YcAXXl04oCuXBge4d__EFl0z41ULg2BGpJMSagoPuJ10WleYl0a3w3Q08PdRBwTAgnbWKgV7N8CqQStxRyIoMzKhI3VZQdUug9-Cq_J4GDad_9tLHd60G_zRMZusOKa8mVaHdSs_TKIdzXH-wNwnoLbpTTN3bA-0b-S1Z26Idy_PgMXs0Vw/s1536/404-errors-1536x891.png" alt="404 Not Found" className="w-full h-56 object-cover" />
          </div>
          <h2 className="text-black">Blog Not Found</h2>
          <Link to="/">
            <Button name="Visit the Home Page" />
          </Link>
        </div>
      }
    </article>
  )
}

export default PostDetails;

