import React from 'react'
import './card.css'
import TinderCard from 'react-tinder-card'
import axios from "axios"

function Card() {
    const [user, setUser] = React.useState([

    ])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    React.useEffect(() => {
        axios.get('https://randomuser.me/api/?results=5')
            .then(res => {
                for (var x of res.data.results) {
                    var userArr = {
                        name: x.name.first + ' ' + x.name.last,
                        img: x.picture.large
                    }
                    setUser(e => [...e, userArr])
                }
            })
    }, [])
    return (
        <div className="userCard">
            <div className="userCard__cardcontainer">

                {user.map((user) => {
                    return (
                        <TinderCard
                            className="swipe"
                            key={user.name}
                            onSwipe={onSwipe}
                            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                            preventSwipe={['right', 'left']}>
                            <div style={{ backgroundImage: `url(${user.img})` }} className="card">
                                <h3>{user.name}</h3>
                            </div>
                        </TinderCard>
                    )
                })}
            </div>

        </div>
    )
}

export default Card
