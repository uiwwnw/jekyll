import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <article>
                <h2>개인연락처</h2>
                <a className="link" href="mailto:uiwwnw@icloud.com"><i className="icon-mail"></i>uiwwnw@icloud.com</a>
                <a className="link" href="https://github.com/uiwwnw"><i className="icon-github-circled-alt"></i>https://github.com/uiwwnw</a>
            </article>
        );
    }
}

export default Contact;