import React, { useState } from 'react';
import cls from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
   const [searchValue, setSearcheValue] = useState('')
   return (
      <div className={cls.root}>
         <div className={cls.searchInput}>
            <BiSearch className={cls.icon} />
            <input
               type='text'
               className={cls.input}
               value={searchValue}
               onChange={e => setSearcheValue(e.target.value)}
            />
         </div>
         <div className={`${cls.foundItems} ${searchValue !== '' && cls.showFoundItems}`}>
         </div>
      </div>
   );
};

export default Search;