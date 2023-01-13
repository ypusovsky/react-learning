import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query)

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  }

  const fetchPosts = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  return (
    <div>
      <MyButton onClick={fetchPosts}>Вытянуть посты</MyButton>
      <MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={addPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr />
      <PostList posts={sortedAndFilteredPosts} remove={removePost} title="Список постов"/>
    </div>
  );
}

export default App;
