import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Blog</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    to: 'blog',
    description: (
      <>
        Blog articles based on our knowledge and
        expertise. Mainly Node, JS and React.
      </>
    ),
  },
  {
    title: <>Docs</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    to: 'docs/doc1',
    description: (
      <>
        Notes and documentation on technology.
      </>
    ),
  },
  {
    title: <>Contribute</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    to: 'https://code-quality-metrics.github.io',
    description: (
      <>
        Get in touch if you wanna help out.
      </>
    ),
  },
];

function Feature({imageUrl, to, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Link to={useBaseUrl(to)}><h3>{title}</h3></Link>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Code Quality Blog and Documentation">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
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
  );
}

export default Home;
