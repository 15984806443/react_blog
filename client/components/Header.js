import React, { useState, useEffect } from "react";
import "../public/style/components/header.css";
import { Row, Col, Menu, Icon } from "antd";
import axios from "axios";
import servicePath from "../config/apiUrl";
import Router from "next/router";

const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);
  const handleClick = e => {
    if (e.key === "0") {
      Router.push("/index");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };
  const itemList = navArray.map((item, index) => {
    return (
      <Menu.Item key={item.id}>
        <Icon type={item.icon} />
        {item.typeName}
      </Menu.Item>
    );
  });
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">阿鱼</span>
          <span className="header-txt">专注前端开发</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item key="0">
              <Icon type="home" />
              博客首页
            </Menu.Item>
            {itemList}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
