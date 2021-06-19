import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import classnames from 'classnames'
import React from 'react'
import Feature from '../components/Feature'
import useScript from '../hooks/useScript'
import styles from './styles.module.css'
import features from '../components/Features'
import Link from '@docusaurus/Link'

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
