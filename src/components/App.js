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
            popover: false,
            popup: false,
            hasOpen: false,
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
                <Header hasOpen={this.state.hasOpen} navActive={this.state.navActive} content={this.state.content} onOpenNav={this.openNav.bind(this)} onCloseAll={this.closeAll.bind(this)} onTab={this.changeTab.bind(this)} menu={menu} />;
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
            <main className={this.state.hasOpen?'openPopup':''} onClick={this.state.hasOpen?this.closeAll.bind(this):''} >
                {header}
                {nav}
                <Content content={this.state.content} menu={menu} className={contentClassName}/>
                {footer}
            </main>
        );
    }
    closeAll() {
        this.setState({
            hasOpen: false,
            navActive: false
        })
    }
    openNav() {
        this.setState({
            hasOpen: true,
            navActive: true
        })
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