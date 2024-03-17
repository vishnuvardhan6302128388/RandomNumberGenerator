// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}
  onChangeNum = () => {
    const getRandomNum = Math.ceil(Math.random() * 100)
    this.setState({num: getRandomNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onChangeNum} className="btn">
            Generate
          </button>
          <p className="num">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
