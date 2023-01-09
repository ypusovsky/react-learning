import MyButton from "./UI/button/MyButton";

function PostItem({post, number, remove}) {
    const removePost = () => {
        remove(post.id);
    }

    return ( 
        <div>
            <h1>{number}. {post.title}</h1>
            <p>{post.body}</p>
            <MyButton onClick={removePost}>Удалить</MyButton>
        </div>
     );
}

export default PostItem;