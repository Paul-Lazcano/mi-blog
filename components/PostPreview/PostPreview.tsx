import Link from 'next/link';
import { FC } from 'react';
import { Post } from '../../types';

interface Props {
  post: Post;
}

const PostPreview: FC<Props> = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <a>
        <div className="flex flex-col gap-y-2 bg-white shadow-lg w-full border border-solid border-gray-200 hover:shadow-2xl transition ease-in duration-150 p-3 lg:p-5 rounded-lg cursor-pointer">
          <h3 className="text-xl">{post.attributes.title}</h3>
          <p>{post.attributes.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
