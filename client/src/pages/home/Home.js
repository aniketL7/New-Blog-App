import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fectchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fectchPosts();
  }, [search]);
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default Home;
