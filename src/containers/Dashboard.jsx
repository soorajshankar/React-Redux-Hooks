import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import HeaderComp from "./Header";
import StatisticsList from "../components/StatisticsList";
/**
 *
 * @param {string} allUsers list of users
 */
const Dashboard = ({ allUsers }) => {
  return (
    <Layout>
      <HeaderComp selection="1" />
      <StatisticsList
        title={"Current session logons"}
        allUsers={Object.values(allUsers)}
      />
    </Layout>
  );
};
const mapStateToProps = state => ({
  allUsers: state.allUsers
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
