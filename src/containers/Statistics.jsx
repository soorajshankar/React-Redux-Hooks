import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import HeaderComp from "./Header";
import StatisticsList from "../components/StatisticsList";
import { getStoredItem } from "../localStorage/storageHelpers";

/**
 * # Statistics Component
 *
 * @prop {array} allUsers array of users
 * @prop {Function} onLogout logout action
 * @returns React Node
 */
const Statistics = ({ allUsers: propAllUsers, onLogout }) => {
  const [allUsers, setAllUsers] = useState({});
  useEffect(() => {
    const oldUsers = getStoredItem("allUsers");
    setAllUsers({ ...oldUsers, ...propAllUsers });
  }, [propAllUsers]);
  return (
    <Layout>
      <HeaderComp selection="2" onLogout={onLogout} />
      <StatisticsList
        title={"All signed in users"}
        allUsers={Object.values(allUsers)}
      />
    </Layout>
  );
};
export default Statistics;
