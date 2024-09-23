import React from 'react';
import useFetch from '../hooks/useFetch';
import { User } from '../types/User';

import styles from './Components.module.css';

interface DetailsProps {
  info: User | null;
}

const Details: React.FC<DetailsProps> = ({ info }) => {
  const { data, loading, error } = useFetch<{
    avatar: string;
    details: {
      city: string;
      company: string;
      position: string;
    }
  }>(
    info ? `${import.meta.env.VITE_USER_DETAILS_URL}${info.id}.json` : ''
  );

  if (!info) return null;
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={styles['details-container']}>
      <div className={styles['details-item']}>
        <img src={data?.avatar} alt={info.name} className={styles['avatar']}/>
      </div>
      <div className={styles['details-item']}>
        <h2>{info.name}</h2>
      </div>
      <div className={styles['details-item']}>
        <p>City: {data?.details.city}</p>
      </div>
      <div className={styles['details-item']}>
        <p>Company: {data?.details.company}</p>
      </div>
      <div className={styles['details-item']}>
        <p>Position: {data?.details.position}</p>
      </div>
    </div>
  );
};

export default Details;
