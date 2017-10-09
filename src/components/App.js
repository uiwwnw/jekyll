import React from 'react';
import Header from './Header';
import Content from './Content';
import menu from './menu';
import Nav from './Nav';


class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            nav: false,
            content: 'Home'
        };
    }
    render() {
        let nav;
        if (this.state.nav) {
            nav =
                <Nav onTab={this.changeTab.bind(this)} menu={menu} />
        }
        return (
            <main>
                <Header nav={this.state.nav} content={this.state.content} onClick={this.toggleSidenav.bind(this)} onTab={this.changeTab.bind(this)} />
                {nav}
                <Content content={this.state.content} menu={menu}/>
            </main>
        );
    }
    toggleSidenav() {
        this.setState({ nav: !this.state.nav })
    }
    changeTab(e) {
        var tabNum = e.target.getAttribute('data-tab-key');
        this.setState({
            nav: false,
            content: menu[tabNum].name
        })
    }
}

export default App;