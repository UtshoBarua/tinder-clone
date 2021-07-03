
import TinderCard from 'react-tinder-card';
import './App.css';
import Header from './Component/Header/Header';
import SwipeButtons from './Component/SwipeButtons/SwipeButtons';
import TinderCards from './Component/TinderCards/TinderCards';

function App() {
  return (
    <div className="app">
 
      {/*Header*/}
      <Header></Header>
      {/*Tinder Cards*/}
      <TinderCards></TinderCards>
      <SwipeButtons></SwipeButtons>
            {/*swipe button*/}
    </div>
  );
}

export default App;
