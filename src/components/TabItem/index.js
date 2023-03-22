// Write your code here
import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {info, onChange} = this.props
    const {tabId, displayText} = info
    console.log(tabId)
    const changestate = () => {
      onChange(tabId)
    }
    return (
      <li className="tablist">
        <button type="button" className="but" onClick={changestate}>
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
