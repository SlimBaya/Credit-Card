
import React, { Component } from 'react';
import img1 from './images/puce.png'
import img2 from './images/masterCard.png'
import img3 from './images/visa.png'
import './creditCard.css' 

class CreditCard extends Component {
   render(){
    return (<div className="CreditList">
            <h1 className="CreditTitle"> <strong> CREDIT CARD </strong> </h1>
            <img className="Puce" src={img1} alt=""/>
            <p className="CreditYellowNumber"> <strong> 7253 3256 7895 1245 </strong></p>
            <p className="CreditMonthYear"> Month/Year</p>

            <div className="CreditMain">  
              <p className="CreditNumber1"> <strong> 5422 </strong> </p>
              <div className="CreditNumber2">
                <p className="CreditNumber21"> VALID <br/> THRU </p>
                <p className="CreditNumber22"> > 11/50 </p>
              </div>
            </div>
            <p className="CreditFooter"> <strong> CARDHOLDER </strong>  </p>
            <div className="FooterImages">
              <img className="MasterCard" src={img2} alt=""/>
              <img className="Visa" src={img3} alt=""/>
            </div>
    </div>
  );
}
}
export default CreditCard;