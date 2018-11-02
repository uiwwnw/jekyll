import face from '../img/img.jpg';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <article>
                <h2>안녕하세요. 프론트엔드개발자 윤창원입니다.</h2>
                <img className="myFace" src={face}/>
            </article>
        );
    }
}

export default Home;