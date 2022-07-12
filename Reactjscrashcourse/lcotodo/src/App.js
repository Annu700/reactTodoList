import React from 'react';
// import logo from './logo.svg';
import logo from './lco.png';
import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//          {/* here i accessed logo variable and also access css property */}
//         <img src={logo} className='App-logo' />
//         <h1>Annu</h1>
//         <p>Pandey</p>
//       </header> 
//     </div>
//   );
// }


class App extends React.Component {

constructor(props) {
  // this props access from another place value
  super(props);
  // state is like variable
  this.state = {
    newItem: "",
    //this array will store all new item
    list: []
  }
}


addItem(todoValue) {
  if(todoValue !== ""){
    const newItem = {
      id: Date.now(),
      value: todoValue,
      isDone: false
    };
    // ...means you want to appand all the existing value
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }
}

deleteItem(id) {
  const list = [...this.state.list];
  const updatedlist = list.filter(item => item.id !== id);
  this.setState({list: updatedlist})
}

updatedInput(input) {
  this.setState({newItem: input})
}

  render() {
      return (
        <div>
          <img src={logo} width="100" height="100" className='logo' />
          <h1 className='app-title'>LCO ToDo App</h1>
          <div className="container">
            Add an Item....
            <br />
            <input 
              type="text"
              className='input-text' 
              placeholder='Write a Todo'  
              required
              value={this.state.newItem}
              onChange={e => this.updatedInput(e.target.value)}
            />
            <button 
              className='add-btn'
              onClick={() => this.addItem(this.state.newItem)}
              disabled={ !this.state.newItem.length}
            >Add Todo</button>
            <div className='list'>
              <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                       <input
                          type="checkbox"
                          name= "idDone"
                           checked={item.isDone}
                           onChange={() => {}}
                        />
                        {item.value}
                        <button
                          className='btn'
                          onClick={() => this.deleteItem(item.id)}
                          >Delete</button>
                    </li>
                  );
                })}
                <li>
                  <input type='checkbox' name='' id='' />
                  Record youtube videos
                  <button className='btn'>Delete</button>
                </li>
              </ul>
            </div>
          </div>  
        </div>
      );
  }
}


export default App;