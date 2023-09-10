import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Movies List App 🎬</h1>
      <p>Discover & explor all movies you want</p>
      <Link to="/app">
        <button>Go to App</button>
      </Link>
    </div>
  );
}
