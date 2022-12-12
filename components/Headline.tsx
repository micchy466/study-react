import { ReactElement, JSXElementConstructor, ReactFragment } from 'react'
import styles from '../styles/Home.module.css'

export function Headline(props: { page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined }) {
  return (
    <div>
      <h1 className={styles.title}>
        {props.page} page
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </p>
    </div>
  )
}
