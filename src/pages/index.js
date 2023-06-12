import Feature from '../components/Feature'
import features from '../components/Features'
import styles from './styles.module.css'
import Head from '@docusaurus/Head'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import classnames from 'classnames'
import React from 'react'

// import Link from '@docusaurus/Link'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout description={siteConfig.tagline}>
      <Head>
        <script
          async
          src="https://ackee.4lch4.cloud/tracker.js"
          data-ackee-server="https://ackee.4lch4.cloud"
          data-ackee-domain-id="50c39dd7-cfce-41d4-9f62-345e2b940aa1"></script>
      </Head>

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
