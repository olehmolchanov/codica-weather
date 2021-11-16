import React, { useEffect, useState } from 'react';
import { Country } from './Countries';
import { getCurrentWeather }  from '../../../../services/WeatherService';

import s from './Countries.module.scss';

interface Props {
  country: Country;
}

export const CountryItem = ({ country }: Props) => {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState(0);
  const [temp_max, setTempMax] = useState(0);

  useEffect(() => {
    getCurrentWeather(country.name).then(response => {
      setName(response.data.name);
      setTemp(response.data.main.temp);
      setTempMax(response.data.main.temp_min);
    }, () => {
      console.log("error")
    });
  }, [country.name]);

  return (
    <div className={s.country}>
      <div className={s.country__name}>{name}</div>
      <div className={s.country__wrapper}>
        <div className={s.country__temp_day}>{temp}</div>
        <div className={s.country__temp_night}>{temp_max}</div>
      </div>
      <div className={s.country__button}>
        <button className="btn">More details</button>
      </div>
    </div>
  );
};
