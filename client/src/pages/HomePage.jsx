import { useNavigate } from "react-router-dom";
import useBlogPosts from "../components/useBlogPosts";

function HomePage() {
  const navigate = useNavigate();
  const { postsData } = useBlogPosts();

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button>Create Post</button>
      </div>
      <div className="board">
        {postsData.map((post) => (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <div className="post-actions">
              <button
                className="view-button"
                onClick={() => navigate(`/post/view/${post.id}`)}
              >
                View post
              </button>
              <button className="edit-button">Edit post</button>
            </div>

            <button className="delete-button">x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
