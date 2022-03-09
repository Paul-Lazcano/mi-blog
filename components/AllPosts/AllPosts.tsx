import { FC } from 'react';
import PostPreview from '../PostPreview';
import PostPreviewContainer from '../PostPreviewContainer';
import { Post, Posts } from '../../types';

interface Props {
  posts: Posts;
}

const AllPosts: FC<Props> = ({ posts }) => {
  return (
    <PostPreviewContainer>
      {posts.map((post: Post) => (
        <PostPreview post={post} key={post.id} />
      ))}
    </PostPreviewContainer>
  );
};

export default AllPosts;
