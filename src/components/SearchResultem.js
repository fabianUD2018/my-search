const SearchResultItem = ({ id, name, website, email})=>{

    return (
        <div className="search-result">
            <div className="search-result--image">
                <img className="search-result--image" src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                />
            </div>
            <div className="search-result--info">
                <p>{name}</p>
                <p>{website}</p>
                <small>{email}</small>ç
            </div>
        </div>
    )


}

export default SearchResultItem;