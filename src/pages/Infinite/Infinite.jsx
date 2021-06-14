import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import faker from "faker";
import CircularProgress from "@material-ui/core/CircularProgress";

import UserCard from "../../components/UserCard/UserCard.jsx";

import "./Infinite.scss";

const Infinite = () => {
  const [data, setData] = useState([]);

  const loadFunc = () => {
    setTimeout(
      () =>
        setData((d) => [
          ...d,
          ...[
            {
              name: faker.name.firstName(),
              date: faker.date.past(),
              city: faker.address.city(),
              country: faker.address.country(),
              age: faker.datatype.number(20),
              avatar: faker.image.avatar(),
              description: faker.lorem.sentence(),
            },
          ],
        ]),
      1000
    );
  };

  return (
    <div id="infinite">
      <div className="infinite">
        <div className="header">Infinite Users</div>
        <div className="cards">
          <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={
              <div className="load">
                <CircularProgress />
              </div>
            }
          >
            {data.map((user, index) => (
              <div key={index} className="card">
                <UserCard
                  name={user.name}
                  date={user.date}
                  avatar={user.avatar}
                  description={user.description}
                />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Infinite;
