import { useState } from "react";
import "./style.css"

const SearchBox = ({isSearchActive, handleResetClick, handleSearchClick, searchText, setSearchText}) => {
    

    return (
        <div className="search-container" style={{/*display: "flex", flexDirection:"column", justifyContent:"center" , alignItems:"center", minHeight: "100vh"*/ }} >
            <h1>
                Human resources Search
            </h1>

            <div  >
                <input className="search-input" value={searchText} onChange={({ target: { value } }) => { setSearchText(value) }}></input>
                <button className=" button search-button" onClick={handleSearchClick}>Search</button>
                {isSearchActive && <button className="button" onClick={handleResetClick}>Reset</button>}
            </div>



        </div>
    );
}

export default SearchBox;