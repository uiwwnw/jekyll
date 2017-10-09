import React from 'react';
import Home from './Home';
import Contact from './Contact';

class Content extends React.Component {
    render() {
        let content;
        if (this.props.content === 'Home') {
            content = <Home />
        }
        if (this.props.content === 'Contact') {
            content = <Contact />
        }
        // for (var i = 0; i < this.props.menu.length; i++) {
        //     if (this.props.content == this.props.menu[i].name) {
        //         var name = this.props.menu[i].name;
        //         content = { name }
        //     }
        // }
        return (
            <section className="content">
                {content}
            </section>
        );
    }
}

export default Content;