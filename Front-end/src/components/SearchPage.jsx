import React, { useState } from "react";
import "./SearchPage.scss";
import search from "../assets/img/search.svg"
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowRecentSearches(true);
  };

  const handleRecentClick = (recent) => {
    setSearchTerm(recent);
    setShowRecentSearches(false);
  };

  const viewportWidth = window.innerWidth;
  const handleClick = () => {
      const elements = document.querySelectorAll(".boxe input");
      elements.forEach((element)=>{
        element.style.width = "280px";
      })
  };

  const recentSearches = [
    "Banarsi Silk Saree - Red",
    "Jaipuri Cotton Saree - Blue",
    "Chanderi Silk Saree - Green",
    "Kanjivaram Silk Saree - Yellow",
    "Paithani Silk Saree - Maroon",
    "Tussar Silk Saree - Beige",
    "Bandhani Saree - Purple",
    "Kalamkari Cotton Saree - Orange",
    "Ikat Silk Saree - Pink",
    "Pochampally Silk Saree - Black",
    "Art Silk Saree - Brown",
    "Bhagalpuri Silk Saree - Cream",
    "Kota Silk Saree - Grey",
    "Sambalpuri Silk Saree - White",
    "Patola Silk Saree - Sky Blue",
    "Uppada Silk Saree - Lavender",
    "Kasavu Cotton Saree - Gold",
    "Kerala Kasavu Saree - Silver",
    "Mysore Silk Saree - Peach",
    "Kanchipuram Silk Saree - Magenta",
    "Baluchari Silk Saree - Cyan",
    "Bomkai Silk Saree - Teal",
    "Gadwal Silk Saree - Turquoise",
    "Kota Doria Cotton Saree - Lime",
    "Assam Silk Saree - Indigo",
    "Tant Cotton Saree - Coral",
    "Jamdani Saree - Navy",
    "Kanchi Cotton Saree - Olive",
    "Maheshwari Silk Saree - Tan",
    "Kashida Silk Saree - Plum",
    "Sambalpuri Cotton Saree - Bronze",
    "Pattu Silk Saree - Burgundy",
    "Gota Patti Saree - Crimson",
    "Linen Silk Saree - Fuchsia",
    "Bengal Tant Saree - Mustard",
    "Konrad Silk Saree - Orchid",
    "Khandua Silk Saree - Periwinkle",
    "Ghicha Silk Saree - Ruby",
    "Narayanpet Cotton Saree - Azure",
    "Pitha Cotton Saree - Aquamarine",
    "Rajkot Patola Saree - Coral",
    "Sakal Banarasi Saree - Chocolate",
    "Patola Bandhani Saree - Cardinal",
    "Mangalagiri Cotton Saree - Copper",
    "Chanderi Maheshwari Saree - Cobalt",
    "Kantha Silk Saree - Denim",
    "Chikankari Cotton Saree - Electric Blue",
    "Kasuti Cotton Saree - Firebrick",
    "Gajji Silk Saree - Gold",
    "Sanganeri Cotton Saree - Hot Pink",
    "Tussar Banarasi Saree - Iris",
    "Kantha Cotton Saree - Khaki",
    "Telia Rumal Saree - Lemon",
    "Bagh Print Saree - Lilac",
    "Baluchari Cotton Saree - Mauve",
    "Kashmiri Embroidered Saree - Mint",
    "Kalamkari Silk Saree - Ochre",
    "Gota Work Saree - Olive",
    "Chikankari Silk Saree - Peach",
    "Phulkari Cotton Saree - Papaya",
    "Kanjivaram Banarasi Saree - Pewter",
    "Tangail Cotton Saree - Rose",
    "Saree - Rust",
    "Saree - Salmon",
    "Saree - Sapphire",
    "Saree - Seashell",
    "Saree - Tan",
    "Saree - Taupe",
    "Saree - Thistle",
    "Saree - Tomato",
    "Saree - Ultramarine",
    "Saree - Vanilla",
    "Saree - Verdigris",
    "Saree - Vermilion",
    "Saree - Violet",
    "Saree - Viridian",
    "Saree - Wheat",
    "Saree - Xanadu",
    "Saree - Yellow",
    "Saree - Zaffre"
  ];

  return (
    <div style={{backgroundColor:"#fff4e6", width:"100%", height:"100vh"}} className="cont">
      <div className="head">
      <h1>Search Our Store</h1>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <div className="search-container">
            <div className="boxe">
              <input
                className="fas  form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
                onClick={handleClick}
                onFocus={() => setShowRecentSearches(true)}
              />
                <img style={{width:"25px"}} src={search} alt="" />
               </div>
              {showRecentSearches && searchTerm && (
                <div className="recent-searches">
                  {recentSearches
                    .filter((item) =>
                      item.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((recent, index) => (
                      <div
                        key={index}
                        onClick={() => handleRecentClick(recent)}
                      >
                        {recent}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </nav>
      <div className="best-seller">
        <p>Banarsi Sarees - Best Seller & Trending</p>
      </div>
    </div>
  );
};

export default SearchPage;
