import React from 'react';
import {render} from 'react-dom';

class CatsList extends React.Component {
  render() {
    var cats = this.props.cats.map(function(cat) {
      return (
        <span><p>Name {cat.name}  age {cat.age}</p> | </span>
      )
    }) 
    return (
      <div>
        {cats}
      </div>
    )
  }
}

class Submit extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.addCat({name: 'jill', age: 2})}>Add a new cat</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [
        {name: 'fluffy', age: 2},
        {name: 'bob', age: 4}
      ]
    }
  }

  addCat(cat) {
    this.setState({
      cats: this.state.cats.concat(cat)
    })
  }

  render() {
    return (
      <div>
        <h1> Our Cats</h1>
        <CatsList cats={this.state.cats} />
        <Submit addCat={this.addCat.bind(this)}/>
      </div>
   )
  }
}

render(<App/>, document.getElementById('app'));
