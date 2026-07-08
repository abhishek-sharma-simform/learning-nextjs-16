"use client";
import React, { useState } from "react";
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

const UserList = ({ users }: { users: User[] }) => {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
