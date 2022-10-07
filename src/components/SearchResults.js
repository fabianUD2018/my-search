import SearchResultItem from "./SearchResultem";

const SearchResults = ({ data, searchText }) => {


    return (
        <div className="search-container">
            {

                data
                    .filter(info => info.name.toLowerCase()
                        .includes(searchText.toLowerCase()))
                    .map(
                        d => <SearchResultItem   key={d.id} {...d} ></SearchResultItem>
                    )
            }

        </div>
    );


}

export default SearchResults;