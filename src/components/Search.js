import SearchBox from "./SearchBox"
import { useState } from "react";
import data from "../data.json"
import SearchResults from "./SearchResults";

const Search = () => {

    const [isSearchActive, setIsSearchActive] = useState(false)
    const [searchText, setSearchText] = useState("")


    function handleSearchClick() {
        console.log(searchText  )
        setIsSearchActive(true)
    }

    function handleResetClick() {
        setIsSearchActive(false)
    }
    return (
        <div className={`search  ${!isSearchActive ? "search--center" : ""}`} >
        
        <SearchBox
            handleSearchClick={handleSearchClick}
            isSearchActive={isSearchActive}
            searchText={searchText}
            setSearchText={setSearchText}
            handleResetClick={handleResetClick}>
        </SearchBox>
            {
                isSearchActive &&
                <SearchResults data={data} searchText={searchText}></SearchResults>
            }
        </div>
    )

}


export default Search;