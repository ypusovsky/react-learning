import PostItem from './PostItem';

function PostList({posts, title}) {
    return ( 
        <div>
            <h1>{title}</h1>
            <div>
                {posts.map((post, index) => 
                    <PostItem number={index + 1} post={post} key={post.id}/>
                )}
            </div>
        </div>
     );
}

export default PostList;