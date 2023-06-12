import Feature from '../components/Feature'
import styles from './styles.module.css'
import Layout from '@theme/Layout'
import classnames from 'classnames'
import React from 'react'

const Title = 'About This Site'
const Description = `
So, if you're on this page, you're likely unsure what the hell this site
is for, or you're just the curious type. No worries, it's my project and
I'm still not 100% sure what all will go here 😅
`

const aboutBlocks = [
  {
    title: <>In The Beginning</>,
    imageUrl: 'img/sun-cotton.svg',
    description: (
      <>
        As I start this project on May 09, 2021, I personally see this project and website to be a
        collection of my "public knowledge", which simply means all of the things I learn or pick up
        around my travels on the internet. <a href="/tils/index">TIL snippets</a>,{' '}
        <a href="/cheatsheets/index">cheatsheets</a>, and eventually my blog posts that I've written
        in the past/future.
      </>
    ),
  },
  {
    title: 'Learning in Public',
    imageUrl: 'img/open-sign.svg',
    description: (
      <>
        I got the idea of "Learning in Public" from{' '}
        <a href="https://medium.com/my-learning-journal/why-you-should-learn-in-public-4fd3a6239549">
          a Medium post
        </a>{' '}
        by <a href="https://medium.com/@shuomi">Shu Omi</a>, which led me down the rabbit hole and
        resulted in this site being created. In short:
        <blockquote style={{ marginTop: '5%' }}>
          It simply means sharing what you’re working on with other people. It might be your hobby,
          side project, or just random facts you learned.
        </blockquote>
      </>
    ),
  },
  {
    title: 'Further Expansion',
    imageUrl: 'img/construction.svg',
    description: (
      <>
        At some point, I'll likely include other forms of "Knowledge Base Articles", I'm just not
        sure what that will look like at this point.
      </>
    ),
  },
]

function About() {
  return (
    <Layout title={Title} description={Description}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{Title}</h1>
          <p className="hero__subtitle">{Description}</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {aboutBlocks.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default About
