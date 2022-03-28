import React from 'react';
import List from './List';
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textEntered: "",
      allTodo: [],
      completedTodo: []
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  handleTextEntered = (event) => {
    this.setState({
      textEntered: event.target.value
    })
  }

  clearInput = () => {
    if (this.state.textEntered.length > 0) {
      this.setState({
        textEntered: ""
      })
    }
  }

  handleTodo = (e) => {
    let obj = {
      inputValue: this.state.textEntered,
      isCompleted: false,
      id: new Date().getTime()
    }
    if (e.key === "Enter" && this.state.textEntered.length > 0) {
      this.setState({
        allTodo: [
          ...this.state.allTodo,
          obj
        ],
        textEntered: ""
      })
    }
  }

  deleteTodo = (elm) => {
    const deletedList = this.state.allTodo.filter((item, index) => {
      if (elm.id !== item.id) {
        return true
      }
    })
    this.setState({
      allTodo: deletedList
    })
  }

  markAsDone = (elm) => {
    const doneTodo = this.state.allTodo.map((item, index) => {
      if (elm.id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item
    })
    this.setState({
      allTodo: doneTodo
    })
  }

  render() {
    return(
      <React.Fragment>
        <div className='mainTodoContainer'>
          <h1>todos</h1>
          <div className='inputParentContainer' >
            <input 
              type={"text"} 
              value={this.state.textEntered} 
              placeholder='What needs to be done?'
              onChange={this.handleTextEntered}
              onKeyPress={this.handleTodo}
            />
            <span
              onClick={this.clearInput}
              className="clearInput"
            >x</span>
          </div> 
          <List 
            textEntered={this.state.textEntered} allTodo={this.state.allTodo}
            deleteTodo={this.deleteTodo} markAsDone={this.markAsDone}
          /> 
        </div>        
      </React.Fragment>
    )
  }  
}

export default App;

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }


