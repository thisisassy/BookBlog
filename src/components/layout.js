import * as React from 'react'
import { Link } from 'gatsby'
import { wrapper } from "./layout.module.scss"

const Layout = (pros) => {
  const pageTitle = pros.pageTitle
  const children = pros.children
  return (
    <div className={wrapper}>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout