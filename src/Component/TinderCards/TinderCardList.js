import { Height } from '@material-ui/icons';
import React from 'react';
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"

const TinderCardList = (props) => {

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
  
  return (
    <div className="mainDiv">
      {
        props.people.map((people) => (
       
            <TinderCard className="swipe" onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen('fooBar')}
              preventSwipe={['up', 'down']}>
              <div className="card" style={{ backgroundImage: `url(${people.imgUrl})` }} >
              <h3>{people.name}</h3>
              </div>
            </TinderCard>

  

        ))
      }

    </div>
  );
};

export default TinderCardList;