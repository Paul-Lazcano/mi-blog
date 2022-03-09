import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Posts } from '../types';
import HomeHeader from '../components/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts';

interface Props {
  posts: Posts;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/posts');
    const data: any = await response.json();
    const postsRes: Posts = data.data;
    return {
      props: {
        posts: postsRes,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Home: FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog de Paul</title>
        <meta
          name="description"
          content="Bienvenido al blog personal de Paul, un chico aprendiendo tecnologias web"
        />
      </Head>
      <HomeHeader />
      <h3 className="text-2xl">Últimos 5 post</h3>
      <HomeLatestPosts posts={posts} />
    </>
  );
};

export default Home;
