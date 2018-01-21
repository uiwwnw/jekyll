import React from 'react';
import Header from './Header';
import Content from './Content';
import Nav from './Nav';
import Footer from './Footer';
import menu from './menu';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            header: true,
            footer: true,
            navActive: false,
            content: 'Home'
        };
    }
    render() {
        let header;
        let nav;
        let contentClassName = 'content';
        let footer;
        if (this.state.header) {
            header =
                <Header navActive={this.state.navActive} content={this.state.content} onClick={this.toggleSidenav.bind(this)} onTab={this.changeTab.bind(this)} menu={menu} />;
            contentClassName += ' hasHeader'
        }
        if (this.state.navActive) {
            nav =
                <Nav onTab={this.changeTab.bind(this)} menu={menu} />
        }
        if (this.state.footer) {
            footer =
                <Footer content={this.state.content} menu={menu}/>;
            contentClassName += ' hasFooter'
        }
        return (
            <main>
                {header}
                {nav}
                <Content content={this.state.content} menu={menu} className={contentClassName}/>
                {footer}
            </main>
        );
    }
    toggleSidenav() {
        this.setState({ navActive: !this.state.navActive })
    }
    changeTab(e) {
        var tabNum = Number(e.target.getAttribute('data-tab-key'));
        // if (tabNum === menu[0].id) {
        //     this.setState({
        //         header: false
        //     })
        // }
        this.setState({
            navActive: false,
            content: menu[tabNum].name
        })
    }
}

export default App;