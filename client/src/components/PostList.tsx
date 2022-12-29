import React, {useEffect, useState, FC} from 'react';
import getPosts from '../services/posts';

import {Link} from '@tanstack/react-router';
import {useAsync} from '../hooks/useAsync';

const PostList: FC = () => {
  // const [posts, setPosts] = useState([]);

  const {loading, error, value: posts} = useAsync(getPosts);

  if(loading) return <h1>Loading</h1>
  if(error) return <h1 className='error-msg'>{error}</h1>

  // useEffect(() => {
  //   getPosts().then((res: Array<{id: string; title: string}>) => setPosts(res));
  // }, []);

  return (
    <div>
      {posts.map((post: {id: string; title: string}, index:number) => {
        return (
          <h1 key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h1>
        );
      })}
    </div>
  );
};

export default PostList;
