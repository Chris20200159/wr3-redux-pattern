import React from 'react';
const Message = () => {
    return <div>
        <p>{props.message}</p>
    </div>
}

const mapStateToProps = state => state;

export default Message;