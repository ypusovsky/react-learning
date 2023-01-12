import PostItem from './PostItem';

function PostList({posts, title, remove}) {
    if (!posts.length) {
        return (<h1 style={{textAlign:'center'}}>Посты не были найдены!</h1>);
    }

    return ( 
        <div>
            <h1>{title}</h1>
            <div>
                {posts.map((post, index) => 
                    <PostItem number={index + 1} post={post} key={post.id} remove={remove}/>
                )}
            </div>
        </div>
     );
}

export default PostList;