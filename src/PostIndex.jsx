export function PostIndex(props) {
  return (
    <div id="posts-index">
      <h1>All {props.postProp.length} Posts</h1>
      {props.postProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
          <button onClick={() => props.onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}


