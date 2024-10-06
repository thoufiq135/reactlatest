import './colour.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

let Data = [
    { name: "Shoe1", price: 50, img: "https://th.bing.com/th/id/R.f2cf52c0868ef93de2c02da1b43d5436?rik=szfggGRqvO2wrw&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2f-122%2fprod_1481632512%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=9FLs1MZGfK%2fjU5SUES6psSsnVJkzfZCU8ipYms9A1i0%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Shoe2", price: 60, img: "https://th.bing.com/th/id/OIP.Rr28kdmA7oIdV2p4NT7u5gHaIJ?rs=1&pid=ImgDetMain" },
    { name: "Shoe3", price: 70, img: "https://th.bing.com/th/id/OIP.sJnblL47zhHcC5rD50iotgHaEK?rs=1&pid=ImgDetMain" },
    { name: "Shoe4", price: 80, img: "https://th.bing.com/th/id/OIP.3arNgL642HlDPqYSDxw11QHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" },
    { name: "Shoe5", price: 90, img: "https://media.sketchfab.com/models/c1d5d216474c4440a8e4060198011474/thumbnails/a895ac90e86b4eb59127dbd3c2db3e5d/7c559658e81743e2845f54c975c4ece4.jpeg" },
    { name: "Shoe6", price: 100, img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/228396227/original/016944c362ecf7c0f49fd547028ff13405a019fc/create-3d-models-and-textures.png" }
];

function Cart1() {
    const [cart, setCart] = useState([]);  
    const [total, setTotal] = useState(0);  

    function addToCart(item) {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.name === item.name);
            if (existingItem) {

                return prevCart.map(i =>
                    i.name === item.name
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {

                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
        setTotal(prevTotal => prevTotal + item.price); 
    }

    function removeFromCart(item) {
        setCart(prevCart => {
            const updatedCart = prevCart
                .map(i =>
                    i.name === item.name
                        ? { ...i, quantity: i.quantity - 1 }
                        : i
                )
                .filter(i => i.quantity > 0);  
            return updatedCart;
        });
        setTotal(prevTotal => prevTotal - item.price);  
    }

    return (
        <>
            <div className="con2">
                {Data.map((item, index) => (
                    <div className="li" key={index}>
                        <img src={item.img} alt={item.name} />
                        <h3 className="h1">{item.name}</h3>
                        <p className="p1">price: ${item.price}</p>
                        <button className="b1" onClick={() => addToCart(item)}>
                            ADD TO CART <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                ))}
            </div>
            <div className='con3'>
                <h1 className='ca'>Cart <FontAwesomeIcon icon={faCartShopping} /></h1>
                <div className='add'>
                    {cart.map((item, index) => (
                        <div className='box1' key={index}>
                            <img className='img1' src={item.img} alt={item.name} />
                            <p>${item.price} x {item.quantity}</p>
                            <div className='count'>
                                <button className='plus' onClick={() => addToCart(item)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <span className='co'>{item.quantity}</span>
                                <button className='minus' onClick={() => removeFromCart(item)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <p>Total: ${total}</p>
            </div>
        </>
    );
}

export { Cart1, Data };
