import React from 'react';
import { Countries } from './components/Countries/Countries';

import s from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className="container">
        <div className={s.home__wrapper}>
          <Countries />
        </div>
      </div>
    </div>
  );
};
