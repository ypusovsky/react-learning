import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'PostTitle1', body: 'Bla-bla3'},
    {id:2, title: 'PostTitle2', body: 'Bla-bla5'},
    {id:3, title: 'PostTitle3', body: 'Bla-bla1'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  }

  const sortPosts = (value) => {
    setSelectedSort(value);
    setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])));
  }

  return (
    <div>
      <PostForm create={addPost}/>
      <hr />
      <MySelect 
        defaultValue='Сортировка' 
        options={
          [
            {title: 'По названию', value: 'title'},
            {title: 'По значению', value: 'body'},
          ]}
        value={selectedSort}
        onChange={sortPosts}  
      />
      {posts.length !== 0 
        ? <PostList posts={posts} remove={removePost} title="Список постов"/>
        : <h1 style={{textAlign:'center'}}>Посты не были найдены!</h1>
      }
      
    </div>
  );
}

export default App;
