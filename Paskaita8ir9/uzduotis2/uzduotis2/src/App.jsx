import { useState, useEffect } from "react";
import "./App.css";
import PostsForm from "./Components/PostsForm/PostsForm.jsx";
import axios from "axios";
import Pos from "./Components/Posts/Pos.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PostsForm posts={posts} setPosts={setPosts} />
      <Pos posts={posts} />
    </>
  );
}

export default App;
