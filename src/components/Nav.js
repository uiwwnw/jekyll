import React from 'react';

class Nav extends React.Component {
    render() {
        let items = this.props.menu.map(function (tab) {
            return (
                <button key={tab.id} onClick={this.props.onTab} data-tab-key={tab.id}>{tab.name}</button>
                );
        }, this);
        
        return (
            <nav className="nav">
                <div>
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