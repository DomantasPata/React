import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "./Components/ContactsPage/ContactsPage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Navigation from "./Components/Navigation/Navigation";
import PostPage from "./Components/PostPage/PostPage";
import PostsPage from "./Components/PostsPage/PostsPage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<h1>Home page</h1>} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
