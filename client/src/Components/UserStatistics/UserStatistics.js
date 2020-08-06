import React from 'react';
import Slide from 'react-reveal/Slide';

import './UserStatistics.css';

const UserStatistics = () => {
    return(
        <div className="user-statistics">
            <div className="container">
                <h2 className="user-statistics__header">We are trusted and use by millions of costumers daily</h2>
                <Slide top>
                <div className="user-statistics__box">
                    <div className="user-statistics__row">
                        <div className="user-statistics__col">
                            <p>95+</p>
                            <h3>Country supported</h3>
                        </div>
                        <div className="user-statistics__col">
                            <p>95+</p>
                            <h3>Country supported</h3>
                        </div>
                        <div className="user-statistics__col">
                            <p>95+</p>
                            <h3>Country supported</h3>
                        </div>
                    </div>
                </div>
                </Slide>
            </div>
        </div>
    )
}

export default UserStatistics;