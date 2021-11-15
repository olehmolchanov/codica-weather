import React from 'react';
import { CountryItem } from './CountryItem';

import s from './Countries.module.scss';
import { Weather } from '../../../../store/types';

interface Props {
  weather: Weather;
}

export interface Country {
  name: string;
  temp_day: string;
  temp_night: string;
}

export const Countries = ({ weather }: Props) => {
  const countries: Country[] = [
    {
      name: `${weather.name}`,
      temp_day: `${Math.floor(weather.main.temp)}°`,
      temp_night: `${Math.floor(weather.main.temp_min)}°`,
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
