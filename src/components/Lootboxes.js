import React from 'react'
import {
    MainContainer,
    InnerContainer,
    Card
} from "../styles/Lootboxes.styles.js";

import goldenbrick from "../assets/goldenbrick.svg";

const Lootboxes = () => {
  return (
    <MainContainer>
        <InnerContainer>
            <Card>
                <div className="card-header">
                    <img src={goldenbrick} alt="lootbox" />
                    <h1> GOLD LOOTBOX</h1>
                </div>
                <div className="card-body">
                    <h3 className='card-body-title'> Chances: </h3>
                    <p>
                        - Gold Brick : 0.01% <br />	
                        - Silver Brick : 0.1% <br />
                        - Bronze Brick : 0.5% <br />
                        - Iron Brick : 1% <br />
                        - Concrete Brick: 10% <br />
                        - Stone Brick: 88.4% <br />
                    </p>
                    <div className="bottom">
                        <h3> Price: 2 credits</h3>
                        <button>LOOT NOW</button>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="card-header">
                    <img src={goldenbrick} alt="lootbox" />
                    <h1> GOLD LOOTBOX</h1>
                </div>
                <div className="card-body">
                    <h3 className='card-body-title'> Chances: </h3>
                    <p>
                        - Gold Brick : 0.01% <br />	
                        - Silver Brick : 0.1% <br />
                        - Bronze Brick : 0.5% <br />
                        - Iron Brick : 1% <br />
                        - Concrete Brick: 10% <br />
                        - Stone Brick: 88.4% <br />
                    </p>
                    <div className="bottom">
                        <h3> Price: 2 credits</h3>
                        <button>LOOT NOW</button>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="card-header">
                    <img src={goldenbrick} alt="lootbox" />
                    <h1> GOLD LOOTBOX</h1>
                </div>
                <div className="card-body">
                    <h3 className='card-body-title'> Chances: </h3>
                    <p>
                        - Gold Brick : 0.01% <br />	
                        - Silver Brick : 0.1% <br />
                        - Bronze Brick : 0.5% <br />
                        - Iron Brick : 1% <br />
                        - Concrete Brick: 10% <br />
                        - Stone Brick: 88.4% <br />
                    </p>
                    <div className="bottom">
                        <h3> Price: 2 credits</h3>
                        <button>LOOT NOW</button>
                    </div>
                </div>
            </Card>
            </InnerContainer>
    </MainContainer>
  )
}

export default Lootboxes