import * as React from "react"
import * as styles from "../Header/index.module.scss"

export default () => {
  return (
    <header>
      <div className={styles.headerInner}>
        <h1>The Art of Tsundoku</h1>
        <p>A Lifestyle Blog with Reading for Bookish: 本のことを中心にライフスタイルについて書くブックエンタメブログ</p>
      </div>
    </header>
  )
}