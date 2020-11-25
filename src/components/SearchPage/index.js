import 'styles/SearchPage.scss';
import { Fragment, useContext, useState, useEffect } from 'react';
import FilterBar from "./Filter/FilterBar";
import Results from "./Results";
import Map from "./Map";
import { YelpContext } from 'YelpContext.js';
import Button from '@material-ui/core/Button';


const SearchPage = props => {
  const { filters, toggleFilterShow,
    results, setRefinedSeed } = useContext(YelpContext);
 

  useEffect(() => {
    setRefinedSeed(results);
    // eslint-disable-next-line
  }, [results]);
 

  return (
    <div className="search-page-layout">
      <Button name='toggle'
        className='show-filters'/* 
        endIcon={<Icon>send</Icon>} */
        value='toggle-switch'
        onClick={toggleFilterShow}
        style={{
          position: 'absolute',
          fontSize: 10,
        }}
        variant="outlined"
        color="primary"
      > Show Filter </Button>
      {filters.show &&
        <>
          <FilterBar
          />
          <div className='filter-spacer'></div>
        </>}
      <Results />
      <Map />
      <div className='map-spacer'>
      </div>
    </div>
  );
};

export default SearchPage;
// {/* <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} /> */}