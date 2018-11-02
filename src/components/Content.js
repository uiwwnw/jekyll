import React from 'react';
// import Home from './Home';
// import Portfolio from './Portfolio';
// import Contact from './Contact';
// import Storytelling from './Storytelling';
// import Findmine from './Findmine';
// import Log from './Log';
import { default as Home } from './Home';
import { default as Portfolio } from './Portfolio';
import { default as Contact } from './Contact';
import { default as Storytelling } from './Storytelling';
import { default as Findmine } from './Findmine';
import { default as Log } from './Log';
import { Route, Switch } from 'react-router-dom';

class Content extends React.Component {
    render() {
        // let route = this.props.menu.map(function (tab, idx) {
        //     if(tab.name!=='Home') {
        //         return (
        //             <Route path={'/'+tab.name.toLocaleLowerCase()} component={tab.name} key={idx} />                 );
        //     }
        // }, this);
        return (
            <section className={this.props.className}>
                <Route exact path="/portfolio/" component={Home}/>
                <Switch>
                    {/* <Route path="/" component={Home}/> */}
                    <Route path="/portfolio/contact" component={Contact}/>
                    <Route path="/portfolio/portfolio" component={Portfolio}/>
                    <Route path="/portfolio/storytelling" component={Storytelling}/>
                    <Route path="/portfolio/findmine" component={Findmine}/>
                    <Route path="/portfolio/log" component={Log}/>
                    
                </Switch>
                {/* <Route path="/about" component={About}/> */}
                {/* {content} */}
            </section>
        );
    }
}

export default Content;