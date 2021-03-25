import Head from 'next/head'
import styles from './styles.module.scss'

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint
              minus. In possimus, iure distinctio at debitis harum
              necessitatibus laboriosam.
            </p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint
              minus. In possimus, iure distinctio at debitis harum
              necessitatibus laboriosam.
            </p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint
              minus. In possimus, iure distinctio at debitis harum
              necessitatibus laboriosam.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default Posts
