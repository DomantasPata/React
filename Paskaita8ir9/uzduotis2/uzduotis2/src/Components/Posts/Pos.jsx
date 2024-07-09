import styles from "./Posts.module.css";

export default function Users({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      ))}
    </div>
  );
}
