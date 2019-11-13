import { Avatar, Divider } from "antd";
import "../public/style/components/author.css";

const Author = () => (
  <div className="author-div comm-box">
    <div>
      <Avatar
        size={100}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </div>
    <div className="author-introduction">
      热衷于前端开发
      <Divider>社交账号</Divider>
      <Avatar size={28} icon="github" className="account" />
      <Avatar size={28} icon="qq" className="account" />
      <Avatar size={28} icon="wechat" className="account" />
    </div>
  </div>
);

export default Author;
