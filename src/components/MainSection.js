import React from 'react'
import { Button } from './Button'
import '../App.css'

import './MainSection.css'

function MainSection() {
    return (
        <div className='hero-container'>
            {/* <video src="./images/Best Car intro Ever.mp4" autoPlay loop muted/> */}
            {/* <video controls autoplay loop muted>
            <source src='images/Best Car intro Ever.mp4' type="video/mp4"/>
            </video> */}
            <h1>LIVE LIFE KING SIZE</h1>
            <p>The best in town</p>
            <div className='hero-btns'>
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    VIRTUAL WALKTHROUGH <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default MainSection
