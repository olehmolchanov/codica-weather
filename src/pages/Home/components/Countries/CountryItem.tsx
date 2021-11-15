import React from 'react';
import { Country } from './Countries';

import s from './Countries.module.scss';

interface Props {
  country: Country;
}

export const CountryItem = ({ country }: Props) => {
  return (
    <div className={s.country}>
      <div className={s.country__name}>{country.name}</div>
      <div className={s.country__wrapper}>
        <div className={s.country__temp_day}>{country.temp_day}</div>
        <div className={s.country__temp_night}>{country.temp_night}</div>
      </div>
      <div className={s.country__button}>
        <button className="btn">More details</button>
      </div>
    </div>
  );
};
