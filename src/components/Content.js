import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Test1 from './Test1';

class Content extends React.Component {
    render() {
        let content;
        if (this.props.content === this.props.menu[0].name) {
            content = <Home />
        }
        if (this.props.content === this.props.menu[1].name) {
            content = <Contact />
        }
        if (this.props.content === this.props.menu[2].name) {
            content = <Test1 />
        }
        // for (var i = 0; i < this.props.menu.length; i++) {
        //     if (this.props.content == this.props.menu[i].name) {
        //         var name = this.props.menu[i].name;
        //         content = { name }
        //     }
        // }
        return (
            <section className={this.props.className}>
                {content}
            </section>
        );
    }
}

export default Content;