import React from 'react';
import { CountryItem } from './CountryItem';

import s from './Countries.module.scss';

interface Props {}

export interface Country {
  name: string;
  temp_day: string;
  temp_night: string;
}

export const Countries = (props: Props) => {
  const countries: Country[] = [
    {
      name: 'Запорожье',
      temp_day: '15°',
      temp_night: '10°',
    },
    {
      name: 'Киев',
      temp_day: '15°',
      temp_night: '10°',
    },
    {
      name: 'Харьков',
      temp_day: '15°',
      temp_night: '10°',
    },
    {
      name: 'Одесса',
      temp_day: '15°',
      temp_night: '10°',
    },
    {
      name: 'Днепр',
      temp_day: '15°',
      temp_night: '10°',
    },
  ];
  return (
    <div className={s.countries}>
      {countries.map((country: Country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </div>
  );
};
