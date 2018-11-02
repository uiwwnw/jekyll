import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        let items = this.props.menu.map(function (tab, idx) {
            return (
                <NavLink to={tab.name==='Home'?'/portfolio/':'/portfolio/'+tab.name.toLocaleLowerCase()} key={idx} onClick={this.props.onTab} data-tab-key={idx}>{tab.name}</NavLink>
                );
        }, this);
        
        return (
            <nav className="nav">
                <div data-align="middle">
                    {items}
                </div>
            </nav>
        );
    }
    // render() {
    //     return (
    //         <nav className="nav">
    //             <div>
    //                 <button onClick={this.props.onTab1}>home</button>
    //                 <button onClick={this.props.onTab2}>contact</button>
    //             </div>
    //         </nav>
    //     );
    // }
}

export default Nav;