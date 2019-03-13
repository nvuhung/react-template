import React from 'react';

export const UserFullName = ({ user }) =>
  !user ? null : (
    <span>
      {user.first_name} {user.last_name}
    </span>
  );
