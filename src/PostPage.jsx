import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios"; 
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";

export function PostPage() {

const[posts, setPosts] = useState([])
const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
const [currentPosts, setCurrentPosts] = useState({});

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    })
  }

  const handleShow = (post) => {
    console.log("handleShow", post)
    setIsPostsShowVisible(true);
    setCurrentPosts(post)
  }

  const handleUpdate = (post, params) => {
    console.log("handleUpdate");
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params)
      .then((response) => {
      console.log(response.data);
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p))
      setIsPostsShowVisible(false);
    })
  }

  useEffect(handleIndex,[]);


  return (
    <div>
      <PostNew />
      <PostIndex postProp={posts} onShow={handleShow}/>
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)} >
        <PostShow post={currentPosts} onUpdate={handleUpdate}/>

      </Modal>
    </div>

  );




  
{/* <Modal show={isRecipesShowVisible} onClose={() => setIsRecipesShowVisible(false)}></Modal>

    <RecipesIndex recipesProp={recipes} onShow={handleShow} /> */}

}
