import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, MenuItem, InputLabel, FormControl, FormControlLabel, Switch, Select } from '@material-ui/core';
import { 
  TitleImage, InitialClassImage, BlankClass, BlankRace, Class_x999, Class_s2998, Class_s1900, Class_a800, Class_b700, Class_c600, Class_d500, Race_CrossCountryCircuit,Race_CrossCountrySprint,
    Race_DirtCircuit,Race_DirtSprint,Race_DragRace,Race_RoadRaceCircuit,Race_RoadRaceSprint,Race_StreetScene,

    Theme_WorldsFastestRoadcars, Theme_VintageRacers,Theme_VansNUtility,Theme_UpgradeHeroes,Theme_Trucks,Theme_Tracktoys,Theme_SuperSalloons,Theme_SuperHotHatch,Theme_SuperGT,
    Theme_SportsUtilityHeroes,Theme_RuleBritannia,Theme_RodsNCustoms, Theme_RetroSuperCars,Theme_RetroSportsCars,Theme_RetroSalloons,Theme_RetroRally,Theme_RetroMuscle,
    Theme_RetroHotHatch,Theme_ReasonablyPriced,Theme_RareClassics,Theme_RallyMonsters,Theme_OffroadBuggies,Theme_Offroad,Theme_OddBallRally,Theme_MustangVCamaro,Theme_MuscleVTuner,
    Theme_ModernSuperCars,Theme_ModernSportsCars,Theme_ModernRally,Theme_ModernMuscle,Theme_MicroCarMayhem,Theme_LamboVFerrari,Theme_LaCorsaItaliana,
    Theme_JapaneseStyle,Theme_MovieCars,Theme_HyperCars,Theme_HotHatch,Theme_HomologationHeroes,Theme_HighRollers,Theme_HeavyHitters,Theme_GTCars,Theme_GermanPerformance,
    Theme_FerrariVMcLaren,Theme_ExtremeTrackToys, Theme_ExtremeOffroad, Theme_EvoVImpreza,Theme_DavidVGoliath,Theme_DailyDrivers,Theme_CultCars,Theme_ClassicSportsCars,Theme_ClassicRally,
    Theme_Pre1950, Theme_1950s,Theme_1960s,Theme_1970s,Theme_1980s,Theme_1990s,Theme_2000s,Theme_2010s,Theme_AMGvMSport,Theme_AnythingGoes,Theme_AussieRules,Theme_BarnFinds,Theme_BritishRacing,
    Theme_ChevyVDodge,Theme_ClassicMuscle,Theme_ClassicRacers, Theme_ViveLaFrance, Theme_AmericanAllStars
} from './media';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function App() {
  const classes = useStyles();
  const imageResp = {
    width: "100%",
    height: "100%",
    maxWidth: "600px"
  }
  const titleImageResp = {
    width: "70%",
    height: "70%",
    maxWidth: "600px"
  }
  const fullClassList = [ 'X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)' ]
  const typeList = 
  ['Anything Goes','Classic Muscle','Classic Racers','Classic Rally','Classic Sports Cars','Cult Cars',
    'Extreme Offroad','Extreme Track Toys','GT Cars','Hot Hatch','Hypercars','Modern Muscle',
    'Modern Rally','Modern Sports','Modern Supercars','Offroad',
    'Offroad Buggies','Rally Monsters','Rare Classics','Retro Hot Hatch','Retro Muscle',
    'Retro Rally','Retro Saloons','Retro Sports','Retro Supercars','Rods and Customs',
    'Sports Utility Heroes','Super GT','Super Hot Hatch','Super Saloons','Track Toys',
    'Trucks','Vans Utility','Vintage Racer', 'Pre-1950s', '1950s', '1960s', '1970s', '1980s',
    '1990s', '2000s', '2010s', 'American All-Stars', 'AMG vs M-Sport Raceoff', 'Aussie Rules',
    'Barn Finds', 'British Racing Green', 'Chevrolet vs Dodge Raceoff', 'Cult Cars', 'Daily Drivers',
    'David vs Goliath', 'Evo vs Impreza Raceoff', 'Ferrari vs McLaren Raceoff', 'German Performance',
    'Heavy Hitters', 'Highrollers', 'Homologation Heroes', 'Iconic Movie Cars', 'Japanese Style',
    'La Corsa Italiana', 'Lamborghini vs Ferrari Raceoff', 'Microcar Mayhem', 'Mustang vs Camaro Raceoff',
    'Muscle vs Tuner Raceoff', 'Oddball Rally', 'Reasonably Priced', 'Rule Britannia', 'Upgrade Heroes', 
    'Vive la France', `World's Fastest Road Cars`,
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
  var [themeImage, setThemeImage] = useState(InitialClassImage);
  var [classImage, setClassImage] = useState(BlankClass);
  var [raceImage, setRaceImage] = useState(BlankRace);
  const [carClass, setCarClass] = useState('');
  const [themeDescription, setThemeDescription] = useState('');
  const [raceDescription, setRaceDescription] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [carType, setCarType] = useState('');
  const [eventType, setEventType] = useState('');
  const [sprintRace, setSprintRace] = useState(false);
  const [prefferedClass, setPrefferedClass] = useState('');
  const [prefferedTheme, setPrefferedTheme] = useState('');
  const [currentWeatherAndTimeOfDay, setCurrentWeatherAndTimeOfDay] = useState(true);
  const [season, setSeason] = useState('');
  const [prefferedSeason, setPrefferedSeason] = useState('');
  const [weather, setWeather] = useState('');
  const [prefferedWeather, setPrefferedWeather] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [prefferedTimeOfDay, setPrefferedTimeOfDay] = useState('');

  const randomizeEvent = () => {
    let tempCarType = prefferedTheme;
    let tempClass = prefferedClass;
    if (tempCarType === '') {
      let typeRandom = Math.floor(Math.random() * typeList.length);
      tempCarType = typeList[typeRandom];
    }
    let classList = adjustClassForCarTypes(tempCarType);
    if (tempClass === '') {
      let classRandom = Math.floor(Math.random() * classList.length);
      tempClass = classList[classRandom];
    }
    adjustClassImage(tempClass)
    setCarClass(tempClass);
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
    let tempEventStyle = eventStyleList[randomEventNumber]
    setEventType(tempEventStyle);
    let tempSprintRandom = Math.random();
    let sprintRandom = false;
    let tempNumberOfLaps = 2;
    let tempNumberOfRaces = 2;
    if (tempSprintRandom <= 0.5) {
      sprintRandom = false;
      tempNumberOfLaps = Math.floor(Math.random() * 5) + 2;
    } else {
      sprintRandom = true;
      tempNumberOfLaps = 0;
    }
    setSprintRace(true);
    adjustRaceImage(tempEventStyle, sprintRandom)
    tempNumberOfRaces = Math.floor(Math.random() * 5) + 2;
    adjustRaceAndWeatherDescription(tempEventStyle, tempNumberOfRaces, sprintRandom, tempNumberOfLaps, tempSeason, tempWeather, tempTimeOfDay);
  }
  const resetPreferences = () => {
    setCurrentWeatherAndTimeOfDay(true);
    setPrefferedSeason('')
    setPrefferedTimeOfDay('')
    setPrefferedWeather('')
    setClassImage(BlankClass);
    setThemeImage(InitialClassImage);
    setRaceImage(BlankRace);
    setPrefferedClass('');
    setPrefferedTheme('');
    setThemeDescription('');
  }
  const handlePreferedClassSelectChange = (event) => {
    setPrefferedClass(event.target.value);
  };
  const handlePreferedThemeSelectChange = (event) => {
    setPrefferedTheme(event.target.value);
  };
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
    if (type === 'Anything Goes') { setThemeImage(Theme_AnythingGoes); setThemeDescription('Any car can be used'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Muscle') { setThemeImage(Theme_ClassicMuscle); setThemeDescription('Only classic muscle cars'); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Racers') { setThemeImage(Theme_ClassicRacers); setThemeDescription('Only classic racers'); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Rally') { setThemeImage(Theme_ClassicRally); setThemeDescription('Only classic rally cars'); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Sports Cars') { setThemeImage(Theme_ClassicSportsCars);setThemeDescription('Only classic sportscars');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Cult Cars') { setThemeImage(Theme_CultCars);setThemeDescription('Only cult cars');  return ['B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Extreme Offroad') { setThemeImage(Theme_ExtremeOffroad);setThemeDescription('Only extreme offroad cars');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Extreme Track Toys') { setThemeImage(Theme_ExtremeTrackToys);setThemeDescription('Only extreme track toys');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'GT Cars') { setThemeImage(Theme_GTCars);setThemeDescription('Only GT cars');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Hot Hatch') { setThemeImage(Theme_HotHatch);setThemeDescription('Only hot hatches');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)']; }
    if (type === 'Hypercars') { setThemeImage(Theme_HyperCars);setThemeDescription('Only hypercars');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Modern Muscle') { setThemeImage(Theme_ModernMuscle);setThemeDescription('Only modern muscle cars');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Modern Rally') { setThemeImage(Theme_ModernRally);setThemeDescription('Only modern rally cars');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Modern Sports') { setThemeImage(Theme_ModernSportsCars);setThemeDescription('Only modern sportscars');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Modern Supercars') { setThemeImage(Theme_ModernSuperCars);setThemeDescription('Only modern supercars');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Offroad') { setThemeImage(Theme_Offroad);setThemeDescription('Only offroad cars');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Offroad Buggies') { setThemeImage(Theme_OffroadBuggies);setThemeDescription('Only offroad buggies');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Rally Monsters') { setThemeImage(Theme_RallyMonsters);setThemeDescription('Only rally monsters');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Rare Classics') { setThemeImage(Theme_RareClassics);setThemeDescription('Only rare classic cars');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Hot Hatch') { setThemeImage(Theme_RetroHotHatch);setThemeDescription('Only retro hot hatches');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Muscle') { setThemeImage(Theme_RetroMuscle);setThemeDescription('Only retro muscle cars');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Rally') { setThemeImage(Theme_RetroRally);setThemeDescription('Only retro rally cars');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Saloons') { setThemeImage(Theme_RetroSalloons);setThemeDescription('Only retro saloon cars');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Sports') { setThemeImage(Theme_RetroSportsCars);setThemeDescription('Only retro sportscars');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Supercars') { setThemeImage(Theme_RetroSuperCars);setThemeDescription('Only retro supercars');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Rods and Customs') { setThemeImage(Theme_RodsNCustoms);setThemeDescription('Only rods and customs');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Sports Utility Heroes') { setThemeImage(Theme_SportsUtilityHeroes);setThemeDescription('Only sports utility vehicles');  return ['S1 (801-900)', 'A (701-800)']; }
    if (type === 'Super GT') { setThemeImage(Theme_SuperGT);setThemeDescription('Only super GT cars');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Super Hot Hatch') { setThemeImage(Theme_SuperHotHatch);setThemeDescription('Only super hot hatches');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Super Saloons') { setThemeImage(Theme_SuperSalloons);setThemeDescription('Only super saloon cars');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)',]; }
    if (type === 'Track Toys') { setThemeImage(Theme_Tracktoys);setThemeDescription('Only track toys');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Trucks') { setThemeImage(Theme_Trucks);setThemeDescription('Only trucks');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vans Utility') { setThemeImage(Theme_VansNUtility);setThemeDescription('Only vans and other utility vehicles');  return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vintage Racer') { setThemeImage(Theme_VintageRacers);setThemeDescription('Only vintage racers');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }

    if (type === 'Pre-1950s') { setThemeImage(Theme_Pre1950);setThemeDescription('Only cars from before 1950');  return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === '1950s') { setThemeImage(Theme_1950s);setThemeDescription('Only cars from the 1950s era');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === '1960s') { setThemeImage(Theme_1960s);setThemeDescription('Only cars from the 1960s era');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === '1970s') { setThemeImage(Theme_1970s);setThemeDescription('Only cars from the 1970s era');  return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === '1980s') { setThemeImage(Theme_1980s);setThemeDescription('Only cars from the 1980s era');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)']; }
    if (type === '1990s') { setThemeImage(Theme_1990s);setThemeDescription('Only cars from the 1990s era');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)']; }
    if (type === '2000s') { setThemeImage(Theme_2000s);setThemeDescription('Only cars from the 2000s era');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === '2010s') { setThemeImage(Theme_2010s);setThemeDescription('Only cars from the 2010s era');  return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'American All-Stars') { setThemeImage(Theme_AmericanAllStars); setThemeDescription('Only American cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'AMG vs M-Sport Raceoff') { setThemeImage(Theme_AMGvMSport); setThemeDescription('Only BMW M-Sport and Mercedes AMG cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Aussie Rules') { setThemeImage(Theme_AussieRules); setThemeDescription('Only Australian cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Barn Finds') { setThemeImage(Theme_BarnFinds); setThemeDescription('Only barn finds'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'British Racing Green') { setThemeImage(Theme_BritishRacing); setThemeDescription('Only British cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Chevrolet vs Dodge Raceoff') { setThemeImage(Theme_ChevyVDodge); setThemeDescription('Only cars from Chevrolet or Dodge'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Daily Drivers') { setThemeImage(Theme_DailyDrivers); setThemeDescription('Only daily driver, regular everyday passenger cars'); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)']; }
    if (type === 'David vs Goliath') { setThemeImage(Theme_DavidVGoliath); setThemeDescription('Large and heavy crash vs small and light cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Evo vs Impreza Raceoff') { setThemeImage(Theme_EvoVImpreza); setThemeDescription('Only Mitsubishi Evo or Subaru Impreza cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Ferrari vs McLaren Raceoff') { setThemeImage(Theme_FerrariVMcLaren); setThemeDescription('Only Ferrari or McLaren cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'German Performance') { setThemeImage(Theme_GermanPerformance); setThemeDescription('Only German cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Heavy Hitters') { setThemeImage(Theme_HeavyHitters); setThemeDescription('Only cars weighing more then 4.400 lbs / 1.995 kg'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Highrollers') { setThemeImage(Theme_HighRollers); setThemeDescription('Only cars with a base value of more then 1.000.000 credits'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Homologation Heroes') { setThemeImage(Theme_HomologationHeroes); setThemeDescription('Only cars that were used for homologation of a race/rally car'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Iconic Movie Cars') { setThemeImage(Theme_MovieCars); setThemeDescription('Only iconic cars that were featured in films or other media'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Japanese Style') { setThemeImage(Theme_JapaneseStyle); setThemeDescription('Only Japanese cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'La Corsa Italiana') { setThemeImage(Theme_LaCorsaItaliana); setThemeDescription('Only Italian cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Lamborghini vs Ferrari Raceoff') { setThemeImage(Theme_LamboVFerrari); setThemeDescription('Only Lamborghini or Ferrari cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Microcar Mayhem') { setThemeImage(Theme_MicroCarMayhem); setThemeDescription('Only micro cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Mustang vs Camaro Raceoff') { setThemeImage(Theme_MustangVCamaro); setThemeDescription('Only Ford Mustang-badged or Chevrolet Camaro-badged cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Muscle vs Tuner Raceoff') { setThemeImage(Theme_MuscleVTuner); setThemeDescription('Only muscle cars (big engined, heavy, difficult to control, mostly American) or tuner cars (compact engine, fairly light, agile, mostly Japanese)'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', ]; }
    if (type === 'Oddball Rally') { setThemeImage(Theme_OddBallRally); setThemeDescription('Only the weirdest cars'); return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Reasonably Priced') { setThemeImage(Theme_ReasonablyPriced); setThemeDescription('Only cars with a base value of less then 25.000 credits'); return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Rule Britannia') { setThemeImage(Theme_RuleBritannia); setThemeDescription('Only British cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Upgrade Heroes') { setThemeImage(Theme_UpgradeHeroes); setThemeDescription('Only cars that are known for being able to be greatly improved with modding/tuning'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vive la France') { setThemeImage(Theme_ViveLaFrance); setThemeDescription('Only France cars'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === `World's Fastest Road Cars`) { setThemeImage(Theme_WorldsFastestRoadcars); setThemeDescription('Only cars that at some point in history have held the title of fastest (highest topspeed) car in the world'); return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
  }
  const adjustClassImage = (cls) => {
    if (cls === 'X (999+)') { setClassImage(Class_x999); }
    if (cls === 'S2 (901-998)') { setClassImage(Class_s2998); }
    if (cls === 'S1 (801-900)') { setClassImage(Class_s1900); }
    if (cls === 'A (701-800)') { setClassImage(Class_a800); }
    if (cls === 'B (601-700)') { setClassImage(Class_b700); }
    if (cls === 'C (501-600)') { setClassImage(Class_c600); }
    if (cls === 'D (100-500)') { setClassImage(Class_d500); }
  }
  const adjustRaceImage = (race, sprint) => {
    if (race === 'Street scene') { setRaceImage(Race_StreetScene); }
    if (race === 'Road racing') { 
      if (sprint) {
        setRaceImage(Race_RoadRaceSprint); 
      }
      else {
        setRaceImage(Race_RoadRaceCircuit); 
      }
    }
    if (race === 'Cross country') { 
      if (sprint) {
        setRaceImage(Race_CrossCountrySprint); 
      }
      else {
        setRaceImage(Race_CrossCountryCircuit); 
      }
    }
    if (race === 'Dirt racing') { 
      if (sprint) {
        setRaceImage(Race_DirtSprint); 
      }
      else {
        setRaceImage(Race_DirtCircuit); 
      }
    }
    if (race === 'Drag strip') { setRaceImage(Race_DragRace); }
  }
  const adjustRaceAndWeatherDescription = (race, numberOfRaces, sprint, numberOfLaps, season, weather, time) => {
    if (race !== 'Drag strip' && race !== 'Street scene') {
      if (sprint) {
        setRaceDescription(race + ' - ' + numberOfRaces + ' races - Sprint')
      } 
      else {
        setRaceDescription(race + ' - ' + numberOfRaces + ' races - Circuit - ' + numberOfLaps + ' laps')
      }
    }
    else {
      setRaceDescription(race + ' - ' + numberOfRaces + ' races')
    }
    if (season !== '' && weather !== '' && time !== '') {
      setWeatherDescription('Weather: ' + season + ', ' + weather + ', ' + time)
    }
    else {
      setWeatherDescription('Use current season/weather/time')
    }
  }
  return (
    <div style={{padding: 35}} align='center'>
      <div>
        <img style={titleImageResp} src={TitleImage} alt='title' class="responsive"/>
        <h2>Race Randomizer</h2>
      </div>
        <Divider />
        <FormControl className={classes.formControl2}>
          <InputLabel id="class-label">Fixed Class</InputLabel>
          <Select
            labelId="class-label"
            value={prefferedClass === '' ? '' : prefferedClass}
            onChange={handlePreferedClassSelectChange}
          >
            { fullClassList.map(obj => <MenuItem value={obj}>{obj}</MenuItem>) }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl2}>
          <InputLabel id="theme-label">Fixed Theme</InputLabel>
          <Select
            labelId="theme-label"
            value={prefferedTheme === '' ? '' : prefferedTheme}
            onChange={handlePreferedThemeSelectChange}
          >
            { typeList.map(obj => <MenuItem value={obj}>{obj}</MenuItem>) }
          </Select>
        </FormControl><br/>
        <img style={imageResp} src={themeImage} alt='theme' class="responsive"/>
        <div>
          <img src={classImage} /> <img src={raceImage} />
        </div>
        <p>{themeDescription}</p>
        <h3>{carClass !== '' ? raceDescription : ''}</h3>
        <h4>{carClass !== '' ? weatherDescription: ''}</h4>
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
        <small>EXTRA NOTES:</small><br/>
        <small>In case a class is selected that is unattainable in the selected car theme, default to the nearest possible class that is attainable. (Example: There no S1 class cars from the 1950s, even with tuning. There for choose the highest possible class that is attainable; maybe A or B class)</small><br/><br/>
        <p align='right'>made by: Jos Ploegmakers jr.</p>
    </div>
  );
}

export default App;
