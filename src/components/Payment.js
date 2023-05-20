import React,{useState} from 'react'
import Checkoutproduct from "./Checkoutproduct"
import CurrencyFormat from "react-currency-format";
import "../styles/Payment.css"

import {NavLink} from "react-router-dom"
import {useStateValue} from "./Stateprovider";
import { CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import { GetBasketTotal } from "./Reducer";


function Payment() {
   const [{ basket, user },dispatch] = useStateValue();

   const stripe = useStripe();
   const elements = useElements();

   const [error,setError] = useState(null);
   const [disabled, setDisabled] = useState(true);

   const handleSubmit = e =>{
    //will add
   }

   const handleChange = event =>{
    //listen to cardelement and disply error as customer types

    setDisabled(event.empty);
    setError(event.error ? event.erroe.message : "");
   }

  return (
    <div className="payment">
        <div className="payment-container">
            <h1>
                Checkout (<NavLink to="/checkout">{basket.length} items</NavLink>)
            </h1>
            {/* payment section - delivery address */}
             <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address   </h3>
                </div>
                <div className="payment-address">
                    {/* using optional chaining if at all user is undefined */}
                    <p>{user?.email}</p>
                    <p>123 AB Road</p>
                    <p>Chennai</p>
                </div>
             </div>

            {/* payment section - review items */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment-items">
                    {basket.map(item => (
                        <Checkoutproduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            

            {/* payment section - payment method*/}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    {/* stripe magic will go here */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className="payment-priceContainer">
                            <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={GetBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                        </div>
                    </form>
                </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Payment
