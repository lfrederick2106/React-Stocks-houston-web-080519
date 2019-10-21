import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sortValue" value="Alphabetically" checked={null} onChange={props.sortABC}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sortValue" value="Ticker" checked={null} onChange={props.sortTicker}/>
        Ticker Name
      </label>
      <label>
        <input type="radio" name="sortValue" value="Price" checked={null} onChange={props.sort$$$}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select id="filterOption" onChange={() => props.filterByType(document.getElementById("filterOption").value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
