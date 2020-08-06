import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import SelectCurrency from './CurrencySelect';
import axios from 'axios';
import data from '../data/data';

import './ExchangeForm.css';

class ExchangeForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: null,
            fromCurrency: 'USD',
            toCurrency: 'GBP',
            amount: 1,
            currencies: [],
        }
    }

    // Initiallizes the currencies with values from the api
    componentDidMount(){
        axios
        .get('https://api.exchangeratesapi.io/latest')
        .then(response =>{
            const currencyAr = ['EUR']
            for (const key in response.data.rates) {
                currencyAr.push(key)     
            }
            this.setState({ currencies: currencyAr.sort() })
        })
        .catch(err => {
            console.log('opps', err.message);
        })

    }

    onSelectCurrency(code){
        console.log('selecting currency: '+code);
    }

    render(){
        const {currencies} = this.state;
    return (
        <Fade right>
        <div className="exchange">
            <form className="exchange-form">
                <div className="input-wrapper">
                    <span>
                    <label className="input-label">You Send</label>
                    <input className="exchange-input" type="text" placeholder="10,000" />
                    </span>
                   <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency}/>
                </div>
                <div className="input-wrapper">
                    <span>
                    <label className="input-label">Recipient will get</label>
                    <input className="exchange-input" type="text" placeholder="20,000" />
                    </span>
                    <SelectCurrency />
                </div>
                <button className="exchange-btn">Proceed <span className="arrow-icon"><i class="fas fa-arrow-right"></i></span> </button>
            </form>
        </div>
        </Fade>
    )
};
}

export default ExchangeForm;