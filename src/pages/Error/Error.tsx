import React from 'react';

import s from '../Error/Error.module.scss';

interface Props {}

export const Error = (props: Props) => {
  return (
    <div className={s.error}>
      <div className="container">
        <h1 className={s.error__title}>404</h1>
      </div>
    </div>
  );
};
