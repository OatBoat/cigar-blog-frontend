export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
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
            Post: <input type="text" />
          </div>
          <div>
            User: <input type="text" />
          </div>
          <button type="submit">Submit post</button>
        </div>
      </form>
    </div>
  );
}
