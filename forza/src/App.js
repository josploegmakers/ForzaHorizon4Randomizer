import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider } from '@material-ui/core';
import TitleImage from './media/title.jpg'
import blankImage from './media/blank.jpg'
import x999 from './media/999x.png'
import RetroSuperCars from './media/retrosupercars.png'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
}));

function App() {
  const classes = useStyles();
  const imageResp = {
    width: "100%",
    height: "100%"
  }
  const typeList = 
  ['Anything Goes','Classic Muscle','Classic Racers','Classic Rally','Classic Sports Cars','Cult Cars',
    'Extreme Offroad','Extreme Track Toys','GT Cars','Hot Hatch','Hypercars','Modern Muscle',
    'Modern Rally','Modern Sports','Modern Supercars','Offroad',
    'Offroad Buggies','Rally Monsters','Rare Classics','Retro Hot Hatch','Retro Muscle',
    'Retro Rally','Retro Saloons','Retro Sports','Retro Supercars','Rods and Customs',
    'Sports Utility Heroes','Super GT','Super Hot Hatch','Super Saloons','Track Toys',
    'Trucks','Vans Utility','Vintage Racer'
  ]
  const eventStyleList =
  [
    'Street scene', 'Road racing', 'Cross country', 'Dirt racing', 'Drag strip'
  ]
  const seasonsList = 
  [
    'Spring', 'Summer', 'Fall', 'Winter'
  ]
  const weatherList = 
  [
    'Clear', 'Clear Post-rain', 'Cloudy', 'Cloudy Post-rain', 'Overcast', 'Light rain', 'heavy rain', 'Fog'
  ]
  const timeOfDayList = 
  [
    'Dawn', 'Sunrise', 'Morning', 'Early Afternoon', 'Late Afternoon', 'Sunset', 'Evening', 'Night'
  ]
  var [themeImage, setThemeImage] = useState(blankImage);
  var [classImage, setClassImage] = useState(blankImage);
  const [carClass, setCarClass] = useState('')
  const [carType, setCarType] = useState('')
  const [eventType, setEventType] = useState('')
  const [numberOfRaces, setNumberOfRaces] = useState(2);
  const [sprintRace, setSprintRace] = useState(false);
  const [numberOfLaps, setNumberOfLaps] = useState(3);
  const [currentWeatherAndTimeOfDay, setCurrentWeatherAndTimeOfDay] = useState(true);
  const [season, setSeason] = useState('');
  const [prefferedSeason, setPrefferedSeason] = useState('');
  const [weather, setWeather] = useState('');
  const [prefferedWeather, setPrefferedWeather] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [prefferedTimeOfDay, setPrefferedTimeOfDay] = useState('');

  const randomizeEvent = () => {
    let typeRandom = Math.floor(Math.random() * typeList.length);
    let tempCarType = typeList[typeRandom];
    let classList = adjustClassForCarTypes(tempCarType);
    let classRandom = Math.floor(Math.random() * classList.length);
    adjustClassImage(classList[classRandom])
    setCarClass(classList[classRandom]);
    setCarType(tempCarType);
    let tempSeason = prefferedSeason;
    let tempWeather = prefferedWeather;
    let tempTimeOfDay = prefferedTimeOfDay;
    if (currentWeatherAndTimeOfDay) {
      setWeather('');
      setTimeOfDay('');
    } else {
      if (tempSeason === '') {
        tempSeason = seasonsList[Math.floor(Math.random() * seasonsList.length)];
      }
      if (tempWeather === '') {
        tempWeather = weatherList[Math.floor(Math.random() * weatherList.length)];
      }
      if (tempTimeOfDay === '') {
        tempTimeOfDay = timeOfDayList[Math.floor(Math.random() * timeOfDayList.length)];
      }
      setSeason(tempSeason);
      setWeather(tempWeather);
      setTimeOfDay(tempTimeOfDay);
    }
    const randomEventNumber = Math.floor(Math.random() * eventStyleList.length);
    setEventType(eventStyleList[randomEventNumber]);
    let tempSprintRandom = Math.random();
    if (tempSprintRandom <= 0.5) {
      setSprintRace(false);
      setNumberOfLaps(Math.floor(Math.random() * 5) + 2);
    } else {
      setSprintRace(true);
      setNumberOfLaps(1);
    }
    setNumberOfRaces(Math.floor(Math.random() * 5) + 2);
  }
  const resetPreferences = () => {
    setCurrentWeatherAndTimeOfDay(true);
    setPrefferedSeason('')
    setPrefferedTimeOfDay('')
    setPrefferedWeather('')
    setClassImage(blankImage);
    setThemeImage(blankImage);
  }
  const handlePreferedSeasonSelectChange = (event) => {
    setPrefferedSeason(event.target.value);
  };
  const handleUseCurrentWeatherSelectChange = () => {
    setCurrentWeatherAndTimeOfDay(!currentWeatherAndTimeOfDay);
  };
  const handlePreferedWeatherChange = (event) => {
    setPrefferedWeather(event.target.value);
  };
  const handlePreferedTimeOfDayChange = (event) => {
    setPrefferedTimeOfDay(event.target.value);
  };
  const adjustClassForCarTypes = (type) => {
    if (type === 'Anything Goes') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Muscle') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Racers') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Rally') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Sports Cars') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Cult Cars') { setThemeImage(RetroSuperCars); return ['B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Extreme Offroad') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Extreme Track Toys') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'GT Cars') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Hot Hatch') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)']; }
    if (type === 'Hypercars') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Modern Muscle') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Modern Rally') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Modern Sports') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Modern Supercars') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Offroad') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Offroad Buggies') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Rally Monsters') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Rare Classics') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Hot Hatch') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Muscle') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Rally') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Saloons') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Sports') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Supercars') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Rods and Customs') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Sports Utility Heroes') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)']; }
    if (type === 'Super GT') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Super Hot Hatch') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Super Saloons') { setThemeImage(RetroSuperCars); return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)',]; }
    if (type === 'Track Toys') { setThemeImage(RetroSuperCars); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Trucks') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vans Utility') { setThemeImage(RetroSuperCars); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vintage Racer') { setThemeImage(RetroSuperCars); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
  }
  const adjustClassImage = (cls) => {
    if (cls === 'X (999+)') { setClassImage(x999); }
    if (cls === 'S2 (901-998)') { setClassImage(x999); }
    if (cls === 'S1 (801-900)') { setClassImage(x999); }
    if (cls === 'A (701-800)') { setClassImage(x999); }
    if (cls === 'B (601-700)') { setClassImage(x999); }
    if (cls === 'C (501-600)') { setClassImage(x999); }
    if (cls === 'D (100-500)') { setClassImage(x999); }
  }
  return (
    <div style={{padding: 35}}>
      <img style={imageResp} src={TitleImage} alt='title' class="responsive"/>
      <h1 align='center'>Randomizer App</h1>
        <Divider /><br/>
        <img style={imageResp} src={themeImage} alt='theme' class="responsive"/>
        <h2>{carClass !== '' ? carClass + ' - ' + carType : 'Press the button!!'}</h2> <img src={classImage} alt='class'/>
        <h2>{carClass !== '' ? numberOfRaces + ' races - ' + eventType : ''}</h2>
        <h2>{carClass !== '' ? sprintRace ? 'Sprint' : 'Circuit' : ''}</h2>
        <h2>{carClass !== '' && !sprintRace ? 'Number of laps: ' + numberOfLaps : ''}</h2>
        <h2>{carClass !== '' ? currentWeatherAndTimeOfDay ? 'Current season/weather/time' : 'Custom season/weather/time(see below)' : ''}</h2>
        <h3>{carClass !== '' && !currentWeatherAndTimeOfDay ? season : ''}</h3>
        <h3>{carClass !== '' && !currentWeatherAndTimeOfDay ? weather : ''}</h3>
        <h3>{carClass !== '' && !currentWeatherAndTimeOfDay ? timeOfDay : ''}</h3>
        <Divider /><br/>
        <Button onClick={randomizeEvent} size='small' variant="contained" color="primary">
          Randomize
        </Button>
        <Button onClick={resetPreferences} size='small' variant="contained" color="secondary">
          Reset preferences
        </Button>
        <br/>
        <FormControlLabel
          control={<Switch checked={currentWeatherAndTimeOfDay} onChange={handleUseCurrentWeatherSelectChange} />}
          label="Use current season/weather/time"
        />
        <br/>
        <FormControl className={classes.formControl} disabled={currentWeatherAndTimeOfDay}>
          <InputLabel id="season-label">Season</InputLabel>
          <Select
            labelId="season-label"
            value={prefferedSeason}
            onChange={handlePreferedSeasonSelectChange}
          >
            { seasonsList.map(obj => <MenuItem value={obj}>{obj}</MenuItem>) }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} disabled={currentWeatherAndTimeOfDay}>
          <InputLabel id="weather-label">Weather</InputLabel>
          <Select
            labelId="weather-label"
            value={prefferedWeather}
            onChange={handlePreferedWeatherChange}
          >
            { weatherList.map(obj => <MenuItem value={obj}>{obj}</MenuItem>) }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} disabled={currentWeatherAndTimeOfDay}>
          <InputLabel id="time-of-day-label">Time</InputLabel>
          <Select
            labelId="time-of-day-label"
            value={prefferedTimeOfDay}
            onChange={handlePreferedTimeOfDayChange}
          >
            { timeOfDayList.map(obj => <MenuItem value={obj}>{obj}</MenuItem>) }
          </Select>
        </FormControl>
        <br/>
        <p align='right'>ColtGames - Jos Ploegmakers 2020</p>
    </div>
  );
}

export default App;
