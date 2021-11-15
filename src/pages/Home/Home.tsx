import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fenthCurrentWeather';
import { Countries } from './components/Countries/Countries';

import s from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector((state) => state.currentWeatherSliceReducer);
  useEffect(() => {
    dispatch(fetchCurrentWeather('Zaporizhia'));
  }, []);
  return (
    <div className={s.home}>
      <div className="container">
        <div className={s.home__wrapper}>
          <Countries weather={weather} />
        </div>
      </div>
    </div>
  );
};
