import React, { useState } from 'react'
import {
    MainContainer,
    InnerContainer,
    Card,
    Inventory,
} from "../styles/Lootboxes.styles.js";

import { motion } from "framer-motion";

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
        image: goldenbrick,
        price: 25,
        lootMethod: function () {
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
                        return alert(`You won a ${goldenLootbox.items[i].name}, with a probability of ${goldenLootbox.items[i].probability * 100}%, you have ${JSON.parse(creditsData) - goldenLootbox.price} credits left`);
                    }
                }
            }
        },
        items: [
            {
                name: "Golden Brick",
                image: goldenbrick,
                probability: 0.01,
            },
            {
                name: "Silver Brick",
                image: silverBrick,
                probability: 0.04,
            },
            {
                name: "Bronze Brick",
                image: bronzeBrick,
                probability: 0.05,
            },
            {
                name: "Iron Brick",
                image: ironBrick,
                probability: 0.15,
            },
            {
                name: "Concrete Brick",
                image: concreteBrick,
                probability: 0.3,
            },
            {
                name: "Stone Brick",
                image: stoneBrick,
                probability: 0.45,
            }
        ]
    }


    const silverLootbox = {
        name: "Silver Lootbox",
        image: silverBrick,
        price: 15,
        lootMethod: function () {
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
                        return alert(`You won a ${silverLootbox.items[i].name}, with a probability of ${silverLootbox.items[i].probability * 100}%, you have ${JSON.parse(creditsData) - silverLootbox.price} credits left`);
                    }
                }
            }
        },
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
                probability: 0.069,
            },
            {
                name: "Iron Brick",
                image: ironBrick,
                probability: 0.16,
            },
            {
                name: "Concrete Brick",
                image: concreteBrick,
                probability: 0.12,
            },
            {
                name: "Stone Brick",
                image: stoneBrick,
                probability: 0.61
            }
        ]
    }

    const bronzeLootbox = {
        name: "Bronze Lootbox",
        image: bronzeBrick,
        price: 5,
        lootMethod: function () {
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
                        return alert(`You won a ${bronzeLootbox.items[i].name}, with a probability of ${bronzeLootbox.items[i].probability * 100}%, you have ${JSON.parse(creditsData) - bronzeLootbox.price} credits left`);
                    }
                }
            }
        },
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
                probability: 0.048,
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
                probability: 0.84
            }
        ]
    }


    // store all looted items in the local storage

    const storeLootedItems = (item) => {
        let lootedItems = JSON.parse(localStorage.getItem("lootedItems"));
        if (lootedItems) {
            lootedItems.push(item);
            localStorage.setItem("lootedItems", JSON.stringify(lootedItems));
            setLootedItems(lootedItems);
        } else {
            localStorage.setItem("lootedItems", JSON.stringify([item]));
            setLootedItems([item]);
        }
    }

    const lootboxes = [goldenLootbox, silverLootbox, bronzeLootbox];

    // get lootedItems from local storage and store them in an array

    const lootedItems = JSON.parse(localStorage.getItem("lootedItems"));
    const [lootedItemsState, setLootedItems] = useState(lootedItems);

    return (
        <MainContainer>
            <InnerContainer>
                <Card as={motion.div}
                initial={{ y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.875, delay: 0.25}}>
                    <div className="card-header">
                        <img src={goldenbrick} alt="lootbox" />
                        <h1> {lootboxes[0].name}</h1>
                    </div>
                    <div className="card-body">
                        <h3 className='card-body-title'> Chances: </h3>
                        <p>
                            - {lootboxes[0].items[0].name} {lootboxes[0].items[0].probability * 100}% <br />
                            - {lootboxes[0].items[1].name} {lootboxes[0].items[1].probability * 100}% <br />
                            - {lootboxes[0].items[2].name} {lootboxes[0].items[2].probability * 100}% <br />
                            - {lootboxes[0].items[3].name} {lootboxes[0].items[3].probability * 100}% <br />
                            - {lootboxes[0].items[4].name} {lootboxes[0].items[4].probability * 100}% <br />
                            - {lootboxes[0].items[5].name} {lootboxes[0].items[5].probability * 100}% <br />
                        </p>
                        <div className="bottom">
                            <h3> Price: 25 credits</h3>
                            <button onClick={lootboxes[0].lootMethod}>LOOT NOW</button>
                        </div>
                    </div>
                </Card>

                <Card as={motion.div}
                initial={{ y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.875, delay: 1}}>
                    <div className="card-header">
                        <img src={silverBrick} alt="lootbox" />
                        <h1> {lootboxes[1].name}</h1>
                    </div>
                    <div className="card-body">
                        <h3 className='card-body-title'> Chances: </h3>
                        <p>
                            - {lootboxes[1].items[0].name} {lootboxes[1].items[0].probability * 100}% <br />
                            - {lootboxes[1].items[1].name} {lootboxes[1].items[1].probability * 100}% <br />
                            - {lootboxes[1].items[2].name} {lootboxes[1].items[2].probability * 100}% <br />
                            - {lootboxes[1].items[3].name} {lootboxes[1].items[3].probability * 100}% <br />
                            - {lootboxes[1].items[4].name} {lootboxes[1].items[4].probability * 100}% <br />
                            - {lootboxes[1].items[5].name} {lootboxes[1].items[5].probability * 100}% <br />
                        </p>
                        <div className="bottom">
                            <h3> Price: 15 credits</h3>
                            <button onClick={lootboxes[1].lootMethod}>LOOT NOW</button>
                        </div>
                    </div>
                </Card>

                <Card as={motion.div}
                initial={{ y: -200, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.875, delay: 2}}>
                    <div className="card-header">
                        <img src={bronzeBrick} alt="lootbox" />
                        <h1> {lootboxes[2].name}</h1>
                    </div>
                    <div className="card-body">
                        <h3 className='card-body-title'> Chances: </h3>
                        <p>
                            - {lootboxes[2].items[0].name} {lootboxes[2].items[0].probability * 100}% <br />
                            - {lootboxes[2].items[1].name} {lootboxes[2].items[1].probability * 100}% <br />
                            - {lootboxes[2].items[2].name} {lootboxes[2].items[2].probability * 100}% <br />
                            - {lootboxes[2].items[3].name} {lootboxes[2].items[3].probability * 100}% <br />
                            - {lootboxes[2].items[4].name} {lootboxes[2].items[4].probability * 100}% <br />
                            - {lootboxes[2].items[5].name} {lootboxes[2].items[5].probability * 100}% <br />
                        </p>
                        <div className="bottom">
                            <h3> Price: 5 credits</h3>
                            <button onClick={lootboxes[2].lootMethod}>LOOT NOW</button>
                        </div>
                    </div>
                </Card>
            </InnerContainer>
            <InnerContainer>
                <Inventory> Looted Items:
                    {lootedItemsState ? lootedItemsState.map((item, index) => {
                        if (item.name === "Golden Brick") {
                        return (
                            <div key={index} className="inventory-item legendary">
                                <img src={item.image} alt={item.name} />
                                <p style={{fontSize: "0.75rem", margin: "0", textAlign: "left"}}>{item.name}</p>
                            </div>
                        );
                        } else if (item.name === "Silver Brick") {
                        return (
                            <div key={index} className="inventory-item epic">
                                <img src={item.image} alt={item.name} />
                                <p style={{fontSize: "0.75rem", margin: "0", textAlign: "left"}}>{item.name}</p>
                            </div>
                        );
                        } else if (item.name === "Bronze Brick" || item.name === "Iron Brick") {
                        return (
                            <div key={index} className="inventory-item rare">
                                <img src={item.image} alt={item.name} />
                                <p style={{fontSize: "0.75rem", margin: "0", textAlign: "left"}}>{item.name}</p>
                            </div>
                        );
                        } else if (item.name === "Concrete Brick") {
                        return (
                            <div key={index} className="inventory-item uncommon">
                                <img src={item.image} alt={item.name} />
                                <p style={{fontSize: "0.75rem", margin: "0", textAlign: "left"}}>{item.name}</p>
                            </div>
                        );
                        } else {
                        return (
                            <div key={index} className="inventory-item common">
                                <img src={item.image} alt={item.name} />
                                <p style={{fontSize: "0.75rem", margin: "0", textAlign: "left"}}>{item.name}</p>
                            </div>
                        );
                        }
                    }) : <p>No items yet</p>
                    }
                </Inventory>
            </InnerContainer>
        </MainContainer>
    )
}

export default Lootboxes