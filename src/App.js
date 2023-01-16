import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./Api/PostService";
import { useFetching } from "./hooks/useFetching";


function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query)

  const [modal, setModal] = useState(false);
  const [fetchPosts, isPostsLoading, responseError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });
  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  }


  return (
    <div>
      <MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={addPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr />
      {responseError 
        ? <h1>Ошибка! {responseError}</h1>
        : <PostList isPostsLoading={isPostsLoading} posts={sortedAndFilteredPosts} remove={removePost} title="Список постов"/>
      }
    </div>
  );
}

export default App;
