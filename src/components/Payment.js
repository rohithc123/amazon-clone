import React from 'react'
import "../styles/Payment.css"
import {useStateValue} from "./Stateprovider";

function Payment() {
   const [{ basket, user },dispatch] = useStateValue();

  return (
    <div className="payment">
        <div className="payment-container">
            
            {/* payment section - delivery address */}
             <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    {/* using optional chaining if at all user is undefined */}
                    <p>{user?.email}</p>
                    <p>123 AB Road</p>
                    <p>Chennai</p>
                </div>
             </div>

            {/* payment section - review items */}
            <div className="payment-section"></div>
            

            {/* payment section - payment method*/}
            <div className="payment-section"></div>
            
            

        </div>
    </div>
  )
}

export default Payment
