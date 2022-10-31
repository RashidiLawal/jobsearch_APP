import React from 'react';
import './search.scss'



const Search = ({ caret, logo, placeholder }) => {
  return (
    <section className='search1'>
      <input type="text" className="secondsearch" placeholder={placeholder} />
      <img src={caret} alt={logo} />
    </section>
  );
};

export default Search