import React, { useState } from 'react';
import List from './components/List';
import Details from './components/Details';
import useFetch from './hooks/useFetch';
import { User } from './types/User';

const App: React.FC = () => {
  const { data: users, loading, error } = useFetch<User[]>(import.meta.env.VITE_USERS_URL);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p>Загрузка пользователей...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <>
      <List users={users || []} onSelectUser={setSelectedUser} />
      <Details info={selectedUser} />
    </>
  );
};

export default App;
