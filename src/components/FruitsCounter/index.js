import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}
  IncrementBanana = () => {
    this.setState(previousstate => ({
      banana: previousstate.banana + 1,
      mango: previousstate.mango,
    }))
  }
  IncrementMangoes = () => {
    this.setState(previousstate => ({
      banana: previousstate.banana,
      mango: previousstate.mango + 1,
    }))
  }
  render() {
    const {banana, mango} = this.state
    const p = (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="menu">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="image"
              />
              <button className="button" onClick={this.IncrementMangoes}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="image"
              />
              <button className="button" onClick={this.IncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
    return p
  }
}

export default FruitsCounter
