import React from 'react';

class Log extends React.Component {
    render() {
        return (
            <article>
                <h2>로그</h2>
                <label className="search">
                    <input type="search"/>
                </label>
                <Result />
            </article>
        );
    }
}

class Result extends React.Component {
    render() {
        return (
            <div>
                <h2>Done</h2>
                <Done />
                <h2>Todo</h2>
                <Todo />
            </div>
        )
    }
}

class Done extends React.Component {
    render() {
        return (
            <ul className="logList">
                <li>다국어 어플 제작 시 기본적인 scss탬플릿 제작</li>
                <li>정말 간단한 jQuery드레그 구현(팝업용)</li>
                <li>WAI-ARIA 스터디 및 내부 스터디 적용</li>
            </ul>
        )
    }
}

class Todo extends React.Component {
    render() {
        return (
            <ul className="logList">
                <li>다국어 어플 제작 시 기본적인 scss탬플릿 제작</li>
                <li>정말 간단한 jQuery드레그 구현(팝업용)</li>
                <li>WAI-ARIA 스터디 및 내부 스터디 적용</li>
            </ul>
        )
    }
}

export default Log;