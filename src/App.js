import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'PostTitle1', body: 'Bla-bla3'},
    {id:2, title: 'PostTitle2', body: 'Bla-bla5'},
    {id:3, title: 'PostTitle3', body: 'Bla-bla1'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedPosts = useMemo(() => {
    console.log('Work sorted posts');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    
    return [...posts];
  }, [posts, filter.sort])
  const sortedAndFilteredPosts = useMemo(() => {
    console.log('Search and filter');
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [sortedPosts, filter.query]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  }

  return (
    <div>
      <MyButton onClick={e => setModal(true)}>Добавить пост</MyButton>
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
