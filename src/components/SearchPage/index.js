import 'styles/SearchPage.scss';
import { useContext, useState, useEffect } from 'react';
import FilterBar from "./Filter/FilterBar";
import Results from "./Results";
import Map from "./Map";
import { YelpContext } from 'YelpContext.js';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const SearchPage = props => {
  const { filters, toggleFilterShow } = useContext(YelpContext);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const a = window.addEventListener('scroll', (event) => {
      setScroll(window.pageYOffset)
    })

    return window.removeEventListener('scroll', a);
  }, [])

  return (
    <div className="search-page-layout">
      {scroll < 150 && 
      <Button name='toggle'
        className='show-filters'
        endIcon={<Icon>send</Icon>}
        value='toggle-switch'
        onClick={toggleFilterShow}
        style={{ position: 'fixed',
        fontSize: 10,
        borderRadius: 20
       }}
        variant="outlined"
        color="primary"
      > All </Button>}
      {filters.show &&
        <FilterBar
        />
      }
      <Results />
      <Map />
    </div>
  );
};

export default SearchPage;
// {/* <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} /> */}