import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeatureGrid from '@site/src/components/FeatureGrid';
import CommandBlock from '@site/src/components/CommandBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'java') {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2000);
    } else {
      setCopiedBedrock(true);
      setTimeout(() => setCopiedBedrock(false), 2000);
    }
  };

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img src="/img/KCF2.png" alt="KCF Logo" className={styles.heroLogo} />

          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Открыть Вики
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://ncore.kg/">
              Наш Сайт
            </Link>
          </div>

          <div className={styles.serverCards}>
            <div className={styles.serverCard} onClick={() => copyToClipboard('185.138.186.219:25565', 'java')}>
              <div className={styles.cardIcon}></div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Java Edition (PC)</span>
                <span className={styles.cardValue}>185.138.186.219:25565</span>
              </div>
              <div className={styles.copyStatus}>{copiedJava ? 'Скопировано!' : 'Нажми, чтобы скопировать'}</div>
            </div>

            <div className={styles.serverCard} onClick={() => copyToClipboard('185.138.186.219:19132', 'bedrock')}>
              <div className={styles.cardIcon}></div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Bedrock (Mobile)</span>
                <span className={styles.cardValue}>185.138.186.219:19132</span>
              </div>
              <div className={styles.copyStatus}>{copiedBedrock ? 'Скопировано!' : 'Нажми, чтобы скопировать'}</div>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Wiki сервера KCF - Лучший ванильный сервер Кыргызстана">
      <HomepageHeader />
      <main>
        <FeatureGrid />
      </main>
    </Layout>
  );
}