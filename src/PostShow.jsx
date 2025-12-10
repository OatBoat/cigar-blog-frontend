export function PostShow({post, onDestroy, onUpdate}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onUpdate(post, params);
    form.reset();
  }

  return (
    <div id="post-show">
      <h1>Post Info:</h1>
      <h2>{post.title}</h2>
      <p>Chef: {post.body}</p>
      <hr />
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={post.title} type="text" />
        </div>
        <div>
          Body: <input name="body" defaultValue={post.body} type="text" />
        </div>
        <div>
          Image URL: <input name="image" defaultValue={post.image} type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={() => onDestroy(post)}>Delete Post</button>
    </div>
  )
}