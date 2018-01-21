import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <article>
                <h2>개인연락처</h2>
                <p>연락은 메일로 부탁드립니다.</p>
                <a href="mailto:uiwwnw@icloud.com"><i className="icon-mail"></i>uiwwnw@icloud.com</a>
            </article>
        );
    }
}

export default Contact;