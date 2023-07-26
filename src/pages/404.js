import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default NotFoundPage;
