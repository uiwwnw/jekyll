import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <article>
                <h2 className="icon-pause-3">안녕하세요.</h2>
                <p>개발자 윤창원입니다. 프론트앤드개발자, UI, UX개발자라는 말을 쓰곤 있지만 아직은 부족한 부분이 있습니다. 더 노력하는 개발자가 되겠습니다.</p>
                <img src="src/ico/daum.png"/>
            </article>
        );
    }
}

export default Home;