import React from 'react';

const Search = () => {
    return (
        <div className="mt-6 w-full border-sky-400 border-2 p-2 flex flex-row">
            <input className="h-11 text-xl grow" placeholder="Код заказа"/>
            <img src="/search.svg" width={46} height={46} alt="Поиск"/>
        </div>
    );
};

export default Search;