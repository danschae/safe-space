import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    borderColor: "red",
  }
}));

const Sort = props => {
  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState(props.defaultOption);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const items = props.sortOptions.map(option => {
    return <MenuItem value={option.id} onClick={() => props.onClick(option.id)}>{ option.value }</MenuItem>
  })


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          className={classes.select}
          value={sortBy}
          onChange={handleChange}
          label="Sort By"
        >
          { items }
        </Select>
      </FormControl>
    </div>
  );
}


export default Sort;