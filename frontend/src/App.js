import logo from './logo.svg';
import './App.css';
import React from "react";


class App extends React.Component {
    state = {
        userName: ''
    }

    fetchLogin = (info) => {
        const infoJSON = {
            user: info
        }
        console.log(infoJSON)
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(infoJSON),
        }).then((res) => {
            if (res.code === '0000'){
                return (
                    <div>
                        {res}
                    </div>
                )
            }
        })
    }

    getUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.getUserName}/>
                <button onClick={() => this.fetchLogin(this.state.userName)}>点击</button>
            </div>
        )
    }
}

export default App;
