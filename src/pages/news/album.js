import Image from "next/image";
const album = () => {
  return (
    <div>
      <img
        src="https://samcurry.net/wp-content/uploads/2022/08/1644864897-next-framework.jpeg"
        alt=""
        width="100%"
      />

      {/* Best with optimization */}
      <Image
        src="https://samcurry.net/wp-content/uploads/2022/08/1644864897-next-framework.jpeg"
        width={800}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default album;
