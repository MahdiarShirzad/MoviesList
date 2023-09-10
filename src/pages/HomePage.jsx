import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Movies List App 🎬</h1>
      <p>Discover all movies</p>
      <Link to="/app">
        <div>Go to App</div>
      </Link>
    </div>
  );
}
