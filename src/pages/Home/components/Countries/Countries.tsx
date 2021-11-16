import React from 'react';
import { CountryItem } from './CountryItem';

import s from './Countries.module.scss';

export interface Country {
  name: string;
}

interface Props {}

export const Countries = (props: Props) => {
  const countries: Country[] = [
    {
      name: 'Kiev',
    },
    {
      name: 'Zaporizhzhia',
    },
    {
      name: 'Kharkiv',
    },
    {
      name: 'Odessa',
    },
    {
      name: 'Dnepr',
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
