import React from 'react'
import {
    MainContainer,
    InnerContainer,
    Card,
    LogoutButton,
} from "../styles/Lootboxes.styles.js";

import {motion} from "framer-motion";

import silverBrick from "../assets/bricks/silverBrick.png";
import goldenbrick from "../assets/goldenbrick.svg";
import bronzeBrick from "../assets/bricks/bronzeBrick.png";
import ironBrick from "../assets/bricks/ironBrick.png";
import stoneBrick from "../assets/bricks/stoneBrick.png";
import concreteBrick from "../assets/bricks/concreteBrick.png";


const Lootboxes = () => {

    // create array of items, which will be randomly selected with random probability

    const goldenLootbox = {
        name: "Golden Lootbox",
        price: 25,
        items: [
            {
                name: "Golden Brick",
                image: goldenbrick,
                probability: 0.001,
            },
            {
                name: "Silver Brick",
                image: silverBrick,
                probability: 0.01,
            },
            {
                name: "Bronze Brick",
                image: bronzeBrick,
                probability: 0.5,
            },
            {
                name: "Iron Brick",
                image: ironBrick,
                probability: 0.1,
            },
            {
                name: "Concrete Brick",
                image: concreteBrick,
                probability: 0.1,
            },
            {
                name: "Stone Brick",
                image: stoneBrick,
                probability: 0.7,
            }
        ]
    }


    const silverLootbox = {
        name: "Silver Lootbox",
        price: 15,
        items: [
            {
                name: "Golden Brick",
                image: goldenbrick,
                probability: 0.0031,
            },
            {
                name: "Silver Brick",
                image: silverBrick,
                probability: 0.031,
            },
            {
                name: "Bronze Brick",
                image: bronzeBrick,
                probability: 0.15,
            },
            {
                name: "Iron Brick",
                image: ironBrick,
                probability: 0.31,
            },
            {
                name: "Concrete Brick",
                image: concreteBrick,
                probability: 0.19,
            },
            {
                name: "Stone Brick",
                image: stoneBrick,
                probability: 0.80
            }
        ]
    }

    const bronzeLootbox = {
        name: "Bronze Lootbox",

        price: 5,
        items: [
            {
                name: "Golden Brick",
                image: goldenbrick,
                probability: 0.0001,
            },
            {
                name: "Silver Brick",
                image: silverBrick,
                probability: 0.001,
            },
            {
                name: "Bronze Brick",
                image: bronzeBrick,
                probability: 0.05,
            },
            {
                name: "Iron Brick",
                image: ironBrick,
                probability: 0.01,
            },
            {
                name: "Concrete Brick",
                image: concreteBrick,
                probability: 0.1,
            },
            {
                name: "Stone Brick",
                image: stoneBrick,
                probability: 0.89
            }
        ]
    }


    // store all looted items in the local storage

    const storeLootedItems = (item) => {
        let lootedItems = JSON.parse(localStorage.getItem("lootedItems"));
        if (lootedItems) {
            lootedItems.push(item);
            localStorage.setItem("lootedItems", JSON.stringify(lootedItems));
        } else {
            localStorage.setItem("lootedItems", JSON.stringify([item]));
        }
    }

    // array of all items in the local storage



    const lootGoldenBox = () => {
        const random = Math.random();
        let probability = 0;
        const creditsData = localStorage.getItem("credits");
        // remove the price from the credits
        // loop through the items and check if the random number is in the probability range
        if (creditsData < goldenLootbox.price) {
            alert("You don't have enough credits to buy this lootbox!");
        } else {
            for (let i = 0; i < goldenLootbox.items.length; i++) {
                probability += goldenLootbox.items[i].probability;
                if (random < probability) {
                    // if the random number is in the probability range, return the item
                    storeLootedItems(goldenLootbox.items[i]);
                    localStorage.setItem("credits", creditsData - goldenLootbox.price);
                    return alert(`You won a ${goldenLootbox.items[i].name}, with a probability of ${goldenLootbox.items[i].probability*100}%`);
                }
            }
        }
    }

    const lootSilverBox = () => {
        const random = Math.random();
        let probability = 0;
        const creditsData = localStorage.getItem("credits");
        // remove the price from the credits
        // loop through the items and check if the random number is in the probability range
        if (creditsData < silverLootbox.price) {
            alert("You don't have enough credits to buy this lootbox!");
        } else {
            for (let i = 0; i < silverLootbox.items.length; i++) {
                probability += silverLootbox.items[i].probability;
                if (random < probability) {
                    // if the random number is in the probability range, return the item
                    localStorage.setItem("credits", JSON.parse(creditsData) - silverLootbox.price);
                    storeLootedItems(silverLootbox.items[i]);
                    return alert(`You won a ${silverLootbox.items[i].name}, with a probability of ${silverLootbox.items[i].probability*100}%`);
                }
            }
        }
    }

    const lootBronzeBox = () => {
        const random = Math.random();
        let probability = 0;
        const creditsData = localStorage.getItem("credits");
        // remove the price from the credits
        // loop through the items and check if the random number is in the probability range
        if (creditsData < bronzeLootbox.price) {
            alert("You don't have enough credits to buy this lootbox!");
        } else {
            for (let i = 0; i < bronzeLootbox.items.length; i++) {
                probability += bronzeLootbox.items[i].probability;
                if (random < probability) {
                    // if the random number is in the probability range, return the item
                    // push the item in local storage
                    localStorage.setItem("credits", JSON.parse(creditsData) - bronzeLootbox.price);
                    storeLootedItems(bronzeLootbox.items[i]);
                    return alert(`You won a ${bronzeLootbox.items[i].name}, with a probability of ${bronzeLootbox.items[i].probability*100}%`);
                }
            }
        }
    }

    const onLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    // function on Loot, decrements ONLY credits in localstorage

    // const onLoot = () => {
    //     const creditsData = localStorage.getItem("credits");
    //     if (creditsData > 0) {
    //         localStorage.setItem("credits", JSON.parse(creditsData) - 1);
    //         window.location.reload();
    //     } else {
    //         alert("You have no credits left");
    //     }
    // };

    //TODO: map each lootbox, and display it in the DOM
    
    return (
        <MainContainer>
            <InnerContainer>
                <Card as={motion.div}
                initial={{ y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.875}}>
                    <div className="card-header">
                        <img src={goldenbrick} alt="lootbox" />
                        <h1> GOLD LOOTBOX</h1>
                    </div>
                    <div className="card-body">
                        <h3 className='card-body-title'> Chances: </h3>
                        <p>
                            - Golden Brick : 0.001% <br />
                            - Silver Brick : 0.1% <br />
                            - Bronze Brick : 0.5% <br />
                            - Iron Brick : 1% <br />
                            - Concrete Brick: 10% <br />
                            - Stone Brick: 88.4% <br />
                        </p>
                        <div className="bottom">
                            <h3> Price: 25 credits</h3>
                            <button onClick={lootGoldenBox}>LOOT NOW</button>
                        </div>
                    </div>
                </Card>

                <Card as={motion.div}
                initial={{ y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.875, delay: 1}}>
                    <div className="card-header">
                        <img src={silverBrick} alt="lootbox" />
                        <h1> SILVER LOOTBOX</h1>
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
                            <h3> Price: 15 credits</h3>
                            <button onClick={lootSilverBox}>LOOT NOW</button>
                        </div>
                    </div>
                </Card>

                <Card as={motion.div}
                initial={{ y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.875, delay: 2}}>
                    <div className="card-header">
                        <img src={bronzeBrick} alt="lootbox" />
                        <h1> BRONZE LOOTBOX</h1>
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
                            <h3> Price: 5 credits</h3>
                            <button onClick={lootBronzeBox}>LOOT NOW</button>
                        </div>
                    </div>
                </Card>
            </InnerContainer>
            <InnerContainer>
                <LogoutButton onClick={onLogout} style={{marginBottom: "2rem"}}>Logout</LogoutButton>
            </InnerContainer>
        </MainContainer>
    )
}

export default Lootboxes