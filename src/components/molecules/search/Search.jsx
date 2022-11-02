import React from 'react';
import './search.scss'



const Search = ({ caret, logo}) => {
  return (
    <section className='search1'>
      <input type="text" className="secondsearch" placeholder="Search the web" />
      <img src="./Icon.png" alt="searchIcon" />
    </section>
  );
};

export default Search