import { useState, useEffect } from "react";
import axios from "axios";

function useBlogPosts() {
  const [postsData, setPostsData] = useState([]);

  const getPosts = async () => {
    try {
      const results = await axios("http://localhost:4000/posts");
      setPostsData(results.data.data);
    } catch (error) {
        console.log(error);
    } 
  };
  useEffect(() => {
    getPosts();
  }, []);

  return {postsData};
}

export default useBlogPosts;
