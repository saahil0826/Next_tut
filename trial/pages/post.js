import axios from "axios";

const Post = ({ id, comments }) => (
  <div>
    <h1>Comments for posts #{id}</h1>
    {comments.map(c => (
      <div key = {c.id}>
        <h5>{c.email}</h5>
        <p>{c.body}</p>
      </div>
    ))}
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const data = res.data;
  return { ...query, comments: data };
};
export default Post;
