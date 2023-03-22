// Write your code here
import './index.css'
import {Component} from 'react'

class AppItem extends Component {
  render() {
    const {appinfo} = this.props
    const {appName, imageUrl, category} = appinfo
    return (
      <li className="appItem">
        <img src={imageUrl} alt={appName} className="appimg" />
        <p className="appname">{appName}</p>
      </li>
    )
  }
}
export default AppItem
