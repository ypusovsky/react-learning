import PostItem from './PostItem';

function PostList({posts}) {
    return ( 
        <div>
            <h1>Список постов</h1>
            <div>
                {posts.map(post => 
                    <PostItem post={post} key={post.id}/>
                )}
            </div>
        </div>
     );
}

export default PostList;