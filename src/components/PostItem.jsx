function PostItem({post, number}) {
    return ( 
        <div>
            <h1>{number}. {post.title}</h1>
            <p>{post.body}</p>
        </div>
     );
}

export default PostItem;