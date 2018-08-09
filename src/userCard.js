import React from 'react';
import { Component } from 'react';


export class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }

    render(){
        return(
        <div style={{height: '5rem', width: '30rem', backgroundColor: this.state.selected ? 'darkseagreen' : 'white', marginLeft: '3rem', boxShadow: '1px 4px 3px 2px grey', margin: 'auto', position: 'relative', marginBottom: '2rem'}}>
            <input style={{marginTop: '1rem', position: 'absolute', marginLeft: '.5rem'}} type="checkbox" onChange={(e) => {
                this.setState({selected: !this.state.selected})
            }}/>
            <span style={{marginTop: '1rem', position: 'absolute', left: '2rem'}}><b>{this.props.data.title}</b></span>
            <img style={{height: '3rem', borderRadius: '50px', position: 'absolute', right: '0', top: '8px', marginRight: '1rem'}} src={this.props.data.user.avatar} />
        </div>
        )
    }
}

export default UserCard;