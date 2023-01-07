import React, { useState } from "react";
import PostList from "./components/PostList";

function App() {
  const [posts] = useState([
    {id:1, title: 'PostTitle1', body: 'Bla-bla'},
    {id:2, title: 'PostTitle2', body: 'Bla-bla'},
    {id:3, title: 'PostTitle3', body: 'Bla-bla'},
  ])

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
