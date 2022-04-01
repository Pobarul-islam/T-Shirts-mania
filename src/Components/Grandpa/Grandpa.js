import React, { useState } from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond Ring'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
   
    return (
      <div className="grandpa">
        <h4>Grandpa</h4>

        <p>
          House: {house}
          <button onClick={handleBuyAHouse}>Buy A House</button>
        </p>
        <div>
          <section style={{ display: "flex" }}>
            <Father house={house} ornaments={ornaments}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </div>
    );
};

export default Grandpa;