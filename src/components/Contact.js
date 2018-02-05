import React from 'react';
import Dialog from './Dialog';

class Contact extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            dialog: false
        };
    }
    render() {
        let sendMail;
        if (this.state.dialog) {
            let content = <a></a>; 
            // href="mailto:uiwwnw@icloud.com"
            sendMail = <Dialog dialogHeader="이메일보내기" dialogContent={content} />
        };
        return (
            <article>
                <h2>개인연락처</h2>
                <button className="link" onClick={this.fnSendMail.bind(this)}><i className="icon-mail"></i>uiwwnw@icloud.com</button>
                <a className="link" href="https://github.com/uiwwnw"><i className="icon-github-circled-alt"></i>https://github.com/uiwwnw</a>
                {sendMail}
            </article>
        );
    }
    fnSendMail(){
        this.setState({
            dialog: !this.state.dialog
        });
    }
}

export default Contact;