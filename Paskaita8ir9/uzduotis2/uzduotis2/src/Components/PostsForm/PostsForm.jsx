import { useState } from "react";
import axios from "axios";

export default function TodosForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      title,
      body,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        requestBody
      );
      const getResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(getResponse.data);
      setTitle("");
      setBody("");
    } catch (error) {
      alert("Kazkas nepavyko");
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="titleInput">Title</label>
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="bodyInput">Body</label>
        <input
          type="text"
          id="bodyInput"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
