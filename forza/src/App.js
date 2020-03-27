import React, { useState } from 'react';
import { Button, Divider } from '@material-ui/core';
import TitleImage from './media/title.jpg'

function App() {
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
  const [carClass, setCarClass] = useState('')
  const [carType, setCarType] = useState('')
  const [eventType, setEventType] = useState('')
  const [numberOfRaces, setNumberOfRaces] = useState(1);

  const randomizeEvent = () => {
    let typeRandom = Math.floor(Math.random() * typeList.length);
    let tempCarType = typeList[typeRandom];
    let classList = adjustClassForCarTypes(tempCarType);
    let classRandom = Math.floor(Math.random() * classList.length);
    setCarClass(classList[classRandom])
    setCarType(tempCarType)
    const randomEventNumber = Math.floor(Math.random() * eventStyleList.length);
    setEventType(eventStyleList[randomEventNumber])
    setNumberOfRaces(Math.floor(Math.random() * 5) + 2)
  }
  const adjustClassForCarTypes = (type) => {
    if (type === 'Anything Goes') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Muscle') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Racers') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Rally') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Classic Sports Cars') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Cult Cars') { return ['B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Extreme Offroad') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Extreme Track Toys') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'GT Cars') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Hot Hatch') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)']; }
    if (type === 'Hypercars') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Modern Muscle') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Modern Rally') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Modern Sports') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Modern Supercars') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Offroad') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Offroad Buggies') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Rally Monsters') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Rare Classics') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Hot Hatch') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Muscle') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Retro Rally') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Saloons') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Sports') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Retro Supercars') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)']; }
    if (type === 'Rods and Customs') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Sports Utility Heroes') { return ['S1 (801-900)', 'A (701-800)']; }
    if (type === 'Super GT') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Super Hot Hatch') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
    if (type === 'Super Saloons') { return ['S2 (901-998)', 'S1 (801-900)', 'A (701-800)',]; }
    if (type === 'Track Toys') { return ['X (999+)', 'S2 (901-998)', 'S1 (801-900)']; }
    if (type === 'Trucks') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vans Utility') { return ['A (701-800)', 'B (601-700)', 'C (501-600)', 'D (100-500)']; }
    if (type === 'Vintage Racer') { return ['S1 (801-900)', 'A (701-800)', 'B (601-700)']; }
  }
  return (
    <div style={{padding: 35}}>
      <img style={imageResp} src={TitleImage} alt='test screen' class="responsive"/>
      <h1 align='center'>Randomizer App</h1>
        <Divider /><br/>
        <h2>{carClass !== '' ? carClass + ' - ' + carType : 'Press the button!!'}</h2>
        <h2>{carClass !== '' ? numberOfRaces + ' races - ' + eventType : 'Press the button!!'}</h2>
        <Divider /><br/>
        <Button onClick={randomizeEvent} size='small' variant="contained" color="primary">
          Randomize
        </Button><br/>
        <br/>
        <p align='right'>ColtGames - Jos Ploegmakers 20202</p>
    </div>
  );
}

export default App;
