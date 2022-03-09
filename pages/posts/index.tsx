import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Posts } from '../../types/Post';
import AllPosts from '../../components/AllPosts';

interface Props {
  posts: Posts;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch('http://localhost:1337/api/posts');
  const data: any = await response.json();
  const postsRes: Posts = data.data;
  return {
    props: {
      posts: postsRes,
    },
  };
};
const AllPostsPage: FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Todos mis posts</title>
        <meta name="description" content="Todos mis posts" />
      </Head>
      <h3 className="text-3xl">Todos los post</h3>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostsPage;
