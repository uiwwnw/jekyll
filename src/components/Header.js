import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <button className={this.props.navActive ? 'callNav active' : 'callNav'} onClick={this.props.onClick}>
                    <i></i>
                </button>
                <h1>{this.props.content}</h1>
                {/* <div className="menuBox">
                    <button className="callHome" onClick={this.props.onTab} data-tab-key="0">aaaaaaaaaaaaaaaa</button>
                    <button className="callHome" onClick={this.props.onTab} data-tab-key="1">bbb</button>
                </div> */}
            </header>
        );
    }
    // toggleSidenav() {
    //     this.refs.active.classList.toggle('active');
    //     this.setProp({nav:!this.props.nav})
    // }

    // componentDidMount() {
    //     this.refs.active.addEventListener('click', this.toggleSidenav);
    // }

    // componentWillUnmount() {
    //     this.refs.active.removeEventListener('click', this.toggleSidenav);
    // }
}


export default Header;