import React, { Component } from 'react';
import './App.css';
import CommentApp from './CommentApp';
class App extends Component {
    render () {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*/!*</header>*!/*/}
                <p className="App-intro">
                    评论列表
                </p>
                {/*<div className="form">*/}
                {/*<Form/>*/}
                {/*</div>*/}
                <CommentApp/>
            </div>
        );
    }
}

export default App;
