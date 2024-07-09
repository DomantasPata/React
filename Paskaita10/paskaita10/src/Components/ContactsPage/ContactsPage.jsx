import { Link } from "react-router-dom";

export default function ContactsPage() {
  return (
    <div>
      <Link to={"/home"}>Go to home page</Link>
      <h1>Contacts</h1>
      <ul>
        <li>Tel: 3123123123</li>
        <li>Email: dsads@dsadas.lt</li>
        <li>adress: verkius 1</li>
      </ul>
    </div>
  );
}
