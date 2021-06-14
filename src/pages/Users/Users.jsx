import React from "react";
import faker from "faker";

import UserTable from "../../components/UserTable/UserTable.jsx";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => ({
  id: index,
  name: faker.internet.userName(),
  email: faker.internet.email(),
  color: faker.internet.color(),
  password: faker.internet.password(),
  ip: faker.internet.ip(),
}));

const Users = () => {
  return (
    <div>
      <UserTable data={data} />
    </div>
  );
};

export default Users;
