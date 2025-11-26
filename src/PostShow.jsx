export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    props.onUpdate(props.post, params);
    form.reset();
  }

  return (
    <div id="post-show">
      <h1>Post Info:</h1>
      <h2>{props.post.title}</h2>
      <p>Chef: {props.post.body}</p>
      <hr />
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={props.post.title} type="text" />
        </div>
        <div>
          Body: <input name="body" defaultValue={props.post.body} type="text" />
        </div>
        <div>
          Image URL: <input name="image" defaultValue={props.post.image} type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={() => props.onDestroy(props.post)}>Delete Post</button>
    </div>
  )
}