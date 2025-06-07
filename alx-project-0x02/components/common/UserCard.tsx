import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserCard;
