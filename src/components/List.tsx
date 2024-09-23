import React from 'react';
import { User } from '../types/User';
import styles from './Components.module.css';

interface ListProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const List: React.FC<ListProps> = ({ users, onSelectUser }) => {
  return (
    <ul className={styles['user-list']}>
      {users.map((user) => (
        <li key={user.id}  className={styles['user-item']} onClick={() => onSelectUser(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
