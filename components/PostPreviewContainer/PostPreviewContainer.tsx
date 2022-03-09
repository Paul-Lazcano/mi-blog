import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PostPreviewContainer: FC<Props> = ({ children }) => {
  return <section className="flex flex-col gap-y-7 my-4">{children}</section>;
};

export default PostPreviewContainer;
