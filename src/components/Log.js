import list from './list';
import React from 'react';

class Log extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            filterText: ''
        };
    }
    handleUserInput(searchItem) {
        this.setState({filterText:searchItem})
    }
    render() {
        return (
            <article>
                <h2>로그</h2>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
                <Result filterText={this.state.filterText} list={list}/>
            </article>
        );
    }
}

class SearchBar extends React.Component {
    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }
    render() {
        return (
            <label className="search">
                <input type="search" placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind(this)} />
            </label>
        );
    }
}
class Result extends React.Component {
    render() {
        return (
            <div>
                <h2>Done</h2>
                <Done filterText={this.props.filterText} list={list} />
                <h2>Todo</h2>
                <Todo filterText={this.props.filterText} list={list} />
            </div>
        )
    }
}

class Done extends React.Component {
    render() {
        let filtered = this.props.list.filter(
          (item) => item.done === true && item.text.indexOf(this.props.filterText) !== -1  
        );
        return (
            <ul className="logList">
                {
                    filtered.map(
                        (item, idx) => <Item key={idx} text={item.text} time={item.time?item.time:'미정'} />
                    )
                }
            </ul>
        )
    }
}

class Todo extends React.Component {
    render() {
        let filtered = this.props.list.filter(
          (item) => item.done !== true && item.text.indexOf(this.props.filterText) !== -1
        );
        return (
            <ul className="logList">
                {
                    filtered.map(
                        (item, idx) => <Item key={idx} text={item.text} time={item.time?item.time:'미정'} />
                    )
                }
            </ul>
        )
    }
}

class Item extends React.Component {
    render() {
        return <li key={this.props.idx}><span>{this.props.time}</span>{this.props.text}</li>
    }
}

export default Log;