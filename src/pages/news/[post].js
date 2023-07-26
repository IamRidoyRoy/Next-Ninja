import { useRouter } from "next/router";

const NewsPost = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is NewsPost dynamic page: {router.query.post}</h1>
    </div>
  );
};

export default NewsPost;
