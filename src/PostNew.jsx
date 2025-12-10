export function PostNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const params = new FormData(form)
    props.onCreate(params)
    form.reset()
  }
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
         
          <select name="Genre" id="genre">
            <option value="Other">other</option>
            <option value="Opion">opinion</option>
            <option value="Fiction">fiction</option>
            <option value="Finance">finance</option>
            <option value="Soical">social</option>
            <option value="AI">AI</option>
          </select>
        </div>
        <div>
          <div>
            Title: <input name="title" type="text" />
          </div>
          <div>
            Body: <input name="body" type="text" />
          </div>
          <div>
            Image: <input name="image" type="text" />
          </div>
          <button type="submit">Submit post</button>
        </div>
      </form>
    </div>
  );
}
