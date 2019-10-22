import React from "react";
import { List, Avatar, Card } from "antd";
import moment from "moment";
/**
 * StatisticsList
 * @prop {array} allUsers list of users
 * @prop {string} title list title
 */
const StatisticsList = ({ allUsers = [], title = "" }) => {
  return (
    <div>
      <Card className="card-statistics" style={{ margin: 50 }} title={title}>
        <List
          itemLayout="horizontal"
          dataSource={allUsers}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.username || "No user name"}
                description={`Created ${moment(item.timestamp).fromNow() ||
                  "Invalid time"}`}
              />
              Email : {item.email || "Invalid email"}
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default StatisticsList;
