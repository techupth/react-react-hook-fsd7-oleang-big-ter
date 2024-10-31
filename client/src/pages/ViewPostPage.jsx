import { useNavigate } from "react-router-dom";
import useBlogPosts from "../components/useBlogPosts";

function ViewPostPage() {
  const navigate = useNavigate();
  const { postsData } = useBlogPosts();

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        <h2>Post Title</h2>
        <p>Content</p>
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {postsData.map((post) => (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <div className="post-actions">
              <button className="view-button">View post</button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
