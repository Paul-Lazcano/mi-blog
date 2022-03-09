import { FC, useEffect, useState } from 'react';
import PostPreview from '../PostPreview';
import PostPreviewContainer from '../PostPreviewContainer';
import { Post, Posts } from '../../types';

interface Props {
  posts: Posts;
}

const HomeLatestPosts: FC<Props> = ({ posts }) => {
  const [latestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    const fiveLatestPosts: any = posts.slice(0, 5);
    setLatestPosts(fiveLatestPosts);
  }, [posts]);
  return (
    <PostPreviewContainer>
      {latestPosts.map((post: Post) => (
        <PostPreview post={post} key={post.id} />
      ))}
    </PostPreviewContainer>
  );
};

export default HomeLatestPosts;
