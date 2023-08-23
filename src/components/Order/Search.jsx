import React from 'react';

const Search = ({onSubmit, value, setValue}) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <div className="mt-6 w-full border-sky-400 border-2 p-2 flex flex-row">
            <input type="text" value={value} onChange={setValue} onKeyDown={handleKeyPress} className="h-11 text-xl grow" placeholder="Код заказа"/>
            <img src="/search.svg" width={46} height={46} alt="Поиск" onClick={onSubmit}/>
        </div>
    );
};

export default Search;