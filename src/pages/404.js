import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h2>Sorry, Page Not Found.</h2>
      <Link to={`/`} />
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
