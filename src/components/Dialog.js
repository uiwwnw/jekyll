import React from 'react';

class Dialog extends React.Component {
    render() {
        return (
            <div className="dialog">
                <div className="dialogHeader">{this.props.dialogHeader}</div>
                <div className="dialogContent">{this.props.dialogContent}</div>
                <div className={this.props.dialogFooter===undefined?'dialogFooter':'dialogFooter' + this.props.dialogFooter}>
                    <button>취소</button>
                    <button>확인</button>
                </div>
            </div>
        );
    }
}

export default Dialog;