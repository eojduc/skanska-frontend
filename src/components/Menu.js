import { Tab, Tabs } from '@mui/material';

const Menu = ({ current, setCurrent }) => {
  const handleChange = (event, value) => {
    setCurrent(value);
  }
  return (
    <Tabs value={current} onChange={handleChange} variant="fullWidth">
      <Tab label="Calendar" value="calendar"  />
      <Tab label="Map" value="map" />
      <Tab label="Form" value="form"/>
    </Tabs>
  )
}

export default Menu;