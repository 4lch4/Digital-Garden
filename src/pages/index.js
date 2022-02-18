import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import classnames from 'classnames'
import React from 'react'
import Feature from '../components/Feature'
import styles from './styles.module.css'
import Head from '@docusaurus/Head'
import features from '../components/Features'
import Link from '@docusaurus/Link'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout description={siteConfig.tagline}>
      <Head>
        <script type="text/javascript" src="https://js-cdn.dynatrace.com/jstag/16362cc0dec/bf48922oxv/4b6329f719b105fd_complete.js" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://countly.4lch4.cloud/sdk/web/countly.min.js"></script>
        <script type="text/javascript">
          //some default pre init
          var Countly = Countly || {};
          Countly.q = Countly.q || [];

          //provide countly initialization parameters
          Countly.app_key = '80ac8638fb55fb5110b76eb4d7892db98e514035';
          Countly.url = 'https://countly.4lch4.cloud';

          Countly.q.push(['track_sessions']);
          Countly.q.push(['track_pageview']);
          Countly.q.push(['track_clicks']);
          Countly.q.push(['track_scrolls']);
          Countly.q.push(['track_errors']);
          Countly.q.push(['track_links']);
          Countly.q.push(['track_forms']);
          Countly.q.push(['collect_from_forms']);
        </script>
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
