import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Users from "./Components/Users/Users.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default App;
