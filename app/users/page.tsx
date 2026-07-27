import UserList from "./UserList";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

const Users = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const users: User[] = data.users;

  return (
    <div>
      <h2>List of users</h2>
      <UserList users={users} />
    </div>
  );
};

export default Users;
