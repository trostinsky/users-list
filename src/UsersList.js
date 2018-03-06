import React, { Component } from 'react';
import User from './User';

class UserList extends Component{
    constructor(props){
        super(props);
        //this.addUser = this.addUser.bind(this);
        this.state = {
            name: '',
            age: 0,
            usersData: []
        }
        fetch(`https://test-users-api.herokuapp.com/users/`)
        .then(base => base.json())
            .then (data => {
                this.setState({
                    usersData: data.data
                })
            })

    }

    addUser = (event) => {
        console.log(this.state);
        this.setState( (prevState) => {
            prevState.usersData.push({name: 'Name', age:'88', id:'999999'});
            return {
                usersData: prevState.usersData
            }
        });
    }

    changeInput = (e) => {
        let stateName = e.target.dataset.state;
        let newState = {};
        newState[stateName] = e.target.value;
        this.setState(newState);
    }

    render(){
        let  userRender = this.state.usersData;
        return (

            <div>
                <div>
                    <input value={this.state.name}
                           type="text"
                           data-state="name"
                           onChange={this.changeInput}/>
                    <input value={this.state.age}
                           type="number"
                           data-state="age"
                           onChange={this.changeInput}
                    />
                    <button onClick={this.addUser}>add</button>
                </div>
                {userRender.map((user, idx) => {
                    return (
                        <User key={idx} id={user.id}
                              name={user.name}
                              age={user.age}
                        />
                    )
                })}

            </div>
        )
    }
}

export default UserList;