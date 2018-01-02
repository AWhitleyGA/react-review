import React from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom'

const NavList = (props) => {
  const { data, displayAttr, pathAttr } = props

  let links = data.map((item, index) => {
    return (
      <p key={index}>
        <Link to={`${props.match.url}/${item[pathAttr]}`}>{item[displayAttr]}</Link>
      </p>
    )
  })

  return (
    <div>
      { links }
    </div>
  )
}

export default withRouter(NavList)
