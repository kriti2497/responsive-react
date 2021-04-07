import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Cars!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/* <img src="images/tata_altroz_ev_geneva_edition_2019_4k-t2.jpg"/> */}
                        <CardItem src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80"
                        text="Tata Altroz is here with the brand new Quiet Black color. You are sure to be awed."
                        label="Dark Black"
                        path="/services"
                        />
                        <CardItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITRNerR3t2M-WJHz0MkJ2zBrX4CDqv5-ukg&usqp=CAU"
                        text="Tata Hexa is here with the celestial blue color. A mysterious yet mesmerising color for your eyes."
                        label="Celestial Blue"
                        path="/services"
                        />
                        <CardItem src="https://www.desktopbackground.org/download/o/2011/10/20/284191_ferrari-concept-cars-wallpapers-226852_1920x1080_h.jpg"
                        text="Volkswagen is here with the hottest product of the year, a red hot car you won't be able to take your eyes off"
                        label="Red Hot"
                        path="/services"
                        />
                        <CardItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrbKEJbPdi2zhyRfjfzjESwZ2EyOdwx61dg&usqp=CAU"
                        text="The brand new ford mustang will leave your mouth open with its extremely glossy finish and will lure you with its beauty"
                        label="Black Beauty"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
