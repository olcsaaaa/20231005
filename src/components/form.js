const { Component } = require('react')

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  subtractCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    const { count } = this.state
    return (
      <div className='imageContainer'>
        <p>Count: {count}</p>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.subtractCount}>-</button>
      </div>
    )
  }
}

export default Form
