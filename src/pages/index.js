import React, {useEffect} from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Feature from '../components/Feature'
import useScript from '../hooks/useScript'

const features = [
  {
    title: <>Built w/ Docusaurus</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        I'm using the <a href="https://docusaurus.io/">Docusaurus framework</a>{' '}
        to build this site as it seems pretty easy to extend out of the box.
      </>
    )
  },
  {
    title: <>Purpose</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        This site is to serve as a collection for all of my documentation, TIL
        snippets, etc., that are to be public knowledge. There are very few
        things I would consider private, so most of what I learn will be here.
      </>
    )
  },
  {
    title: <>Inspiration</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        This project initially started as a way to share my TIL snippets, based
        off{' '}
        <a href="https://news.ycombinator.com/item?id=22908044">
          this Hacker News post
        </a>{' '}
        about writing TILs. However, while looking for a framework to use, I
        found Docusaurus and think I can do much more with this.
      </>
    )
  }
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  useScript()

  return (
    <Layout description={siteConfig.tagline}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('cheatsheets/index')}
            >
              Check out Cheatsheets
            </Link>
          </div>
          <br />
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('tils/index')}
            >
              Check out TILs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
