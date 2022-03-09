import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import MarkdownIt from 'markdown-it';
import { Post, Posts } from '../../types';

interface SSGProps {
  post: Post;
}

export const getStaticProps: GetStaticProps<SSGProps> = async ({ params }) => {
  try {
    const response = await fetch(
      `http://localhost:1337/api/posts/${params?.id}`
    );
    const data: any = await response.json();
    const postsRes: Post = data.data;
    return {
      props: {
        post: postsRes,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/api/posts');
  const data: any = await response.json();
  const postsRes: Posts = data.data;
  const paths: any = postsRes.map((post: any) => {
    return `/posts/${post.id}`;
  });
  return {
    paths,
    fallback: true,
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<Props> = ({ post }) => {
  const markdownThis = new MarkdownIt();
  const htmlContent = markdownThis.render(post?.attributes?.content);

  return (
    <>
      <Head>
        <title>{post?.attributes?.title}</title>
        <meta name="description" content={post?.attributes?.description} />
      </Head>
      <section>
        <header>
          <h1>{post?.attributes?.title}</h1>
          <h2>{post?.attributes?.description}</h2>
        </header>
        <main>
          <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </main>
      </section>
    </>
  );
};

export default PostPage;
