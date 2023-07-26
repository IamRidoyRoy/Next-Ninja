import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>Welcome to news homepage</h1>
      <Link href="/">
        <Button type="primary">Home</Button>
      </Link>
    </div>
  );
};

export default index;
