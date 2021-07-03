
import { useEffect } from "react";
import { useState } from "react";
import TinderCardList from "./TinderCardList";
import axios from '../../Axios/Axios'

const TinderCards = () => {
    const [people, setPeople] = useState([]);
   useEffect(()=>{
            async function fetchData(){
                const req = await axios.get('/tinder/cards');

                setPeople(req.data);
            }
            fetchData();
   },[])
    
  
    return (
        <div className="tinderCards">
         <TinderCardList people={people}></TinderCardList>

        </div>
    );
};

export default TinderCards;