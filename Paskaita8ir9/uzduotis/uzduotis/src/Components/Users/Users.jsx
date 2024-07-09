import styles from "./Users.module.css";

export default function Users({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className={styles.card}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
