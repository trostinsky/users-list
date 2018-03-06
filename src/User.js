import React, { Component } from 'react';

const User = (props) => {
    return (
        <div className="User">
            <div>id: {props.id}</div>
            <div>name: {props.name}</div>
            <div>age: {props.age}</div>
        </div>
    );
}


export default User;