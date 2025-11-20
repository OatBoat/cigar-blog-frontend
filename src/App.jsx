function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            <label for="Genre">Choose a genre:</label>
            <select name="Genre" id="genre">
            <option value="Other">other</option>
            <option value="Opion">opinion</option>
            <option value="Fiction">fiction</option>
            <option value="Finance">finance</option>
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

      <div id="posts-index">
        <h1>All posts</h1>
         <div className="post">
          <h2>Cigar_nut</h2>
          <img src="https://media.istockphoto.com/id/1280131790/vector/cigar-labels-colorful-vintage-banded-badges-for-cigar-branding-vector-set.webp?s=2048x2048&w=is&k=20&c=nIFgee8CnqS0nfxyLjdQBfh6LquT-QNMyocBMTmz0K8="/>
          <p>Post: Arturo Fuente is bomb!</p>
          <button>About User</button>
        </div>
      </div>

      <footer>
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}

export default App;