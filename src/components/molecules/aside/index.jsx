import React from 'react'
import Parag from '../../atoms/paragraph/Parag'
import FirstHeader from '../../atoms/header/FirstHeader'

const Aside = ({ letters, style, update, elegant }) => {
  return (
    <aside style={style}>
      {letters}
      <FirstHeader words={update} />
      <Parag text={elegant} />
    </aside>
  );
};

export default Aside