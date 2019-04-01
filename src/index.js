import React from 'react';
import ReactDOM  from 'react-dom';
import './style.css';


function getItemClassName(isActive){
  let className = "menu-item";
  if(isActive){
    className = "active"
  }

  return className;
}

class Tabs extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      users:props.users,
      article: props.article,
      index: 0
    };
  }

  render(){
    return(
     <div className = "menu">
        <div>
          {this.state.users.map((name, index) => (
            <button
              className = {
                getItemClassName(index === this.state.index
                )}
              key={index}
              onClick = {() => (
                this.setState({index: index})
              )}
            >
              {name}
            </button>
            )
          )}
        </div>
        <div className = "content">
          {this.state.article[this.state.index]}
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <Tabs users = {["bob", "sam", "jhon"]} article = {["B", "S", "J"]}/>, 
  document.getElementById('root')
);
