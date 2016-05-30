import React from 'react'
import {render} from 'react-dom'

class CatSubmit extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.catText}</p>
        <input
          onChange={this.props.updateText}
          value={this.props.catText}
        />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [
        {name: 'cat one', age: 2},
        {name: 'cat two', age: 1}
      ],
      catText: 'starter cat'
    }
  }

  updateText(e) {
    this.setState({
      catText: e.target.value
    })
  }

  render() {
    return (
      <main>
        <h1> Hello World! </h1>
        <CatSubmit catText={this.state.catText} 
                   updateText={this.updateText.bind(this)}/>
      </main>
    )
  }
}

render(<App/>, document.getElementById('app'))
