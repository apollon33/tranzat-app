import React from 'react';
import Flip from 'react-reveal/Flip';

import './HowItWorks.css';

import RegisterIcon from '../../Assets/icons/undraw_sign_in_e6hj.svg';
import SendAmountIcon from '../../Assets/icons/undraw_online_payments_luau.svg';
import AddInfoIcon from '../../Assets/icons/undraw_add_document_0hek.svg';
import VerifyIcon from '../../Assets/icons/undraw_confirm_89ui.svg';
import PaymentIcon from '../../Assets/icons/undraw_pay_online_b1hk.svg';
import SuccessIcon from '../../Assets/icons/undraw_celebration_0jvk.svg';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <div className="container">
                <div className="howitworks-header">
                <div className="howitworks-header__line"></div>
                <h2 className="howitworks-header__title">How it works</h2>
                <p className="howitworks-header__txt">The href attribute requires a valid value to be accessible.</p>
                </div>
                {/* How it works grid box */}
                <Flip top>
                <div className="steps-row">
                    <div className="step-col"> 
                    <img className="steps-img" src={RegisterIcon} />
                    <h3 className="step-title">Register for free.</h3>
                    <p className="step-txt">Sign up online or in our 
                    app for free. All you need is an 
                    email address, or a Google or Facebook account.</p>
                    </div>
                    <div className="step-col">
                       <img className="steps-img" src={SendAmountIcon} />
                       <h3 className="step-title">Choose an amount to send.</h3>
                    <p className="step-txt">Tell us how much you want to send. We’ll show you our fees upfront, and tell you when your money should arrive.</p>
                    </div>
                    <div className="step-col">
                    <img className="steps-img" src={AddInfoIcon} />
                       <h3 className="step-title">Add recipient’s bank details.</h3>
                    <p className="step-txt">Fill in the details of your recipient’s bank account.</p>
                    </div>
                </div>
                </Flip>
                <Flip bottom>
                <div className="steps-row">
                    <div className="step-col"> 
                    <img className="steps-img" src={VerifyIcon} />
                       <h3 className="step-title">Verify your identity.</h3>
                    <p className="step-txt">For some currencies, or for large transfers, we need a photo of your ID. This helps us keep your money safe.</p>
                    </div>
                    <div className="step-col">
                    <img className="steps-img" src={PaymentIcon} />
                       <h3 className="step-title">Pay for your transfer.</h3>
                    <p className="step-txt">Send your money with a bank transfer, or a debit or credit card.</p>
                    </div>
                    <div className="step-col">
                    <img className="steps-img" src={SuccessIcon} />
                       <h3 className="step-title">That’s it.</h3>
                    <p className="step-txt">We’ll handle the rest. You can track your transfer in your account, and we'll tell your recipient it's coming.</p>
                    </div>
                </div>
                </Flip>
            </div>
        </div>
    )
}

export default HowItWorks;