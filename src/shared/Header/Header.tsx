import React from 'react';
import Select from 'react-select';

import s from './Header.module.scss';
interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStylesSelect = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: '#fff',
      border: '1px solid #E4282F',
      borderRadius: '6px',
      width: '200px',
    }),
  };
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__wrapper}>
          <div className={s.header__logo}>:Codica Weather</div>
          <Select defaultValue={options[0]} options={options} styles={customStylesSelect} />
        </div>
      </div>
    </header>
  );
};
