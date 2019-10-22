import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/actionCreators";
import { connect } from "react-redux";
const { Header } = Layout;
/**
 *
 * @param {number} selection selected item
 * @param {Function} onLogout logout action
 */
export const HeaderComp = ({ selection, onLogout }) => {
  return (
    <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[String(selection || 1)]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/statistics">Statistics</Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} onClick={onLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(setLogout());
  }
});

export default connect(
  () => {},
  mapDispatchToProps
)(HeaderComp);
