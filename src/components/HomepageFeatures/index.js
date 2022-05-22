import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easytouse.svg').default,
    description: (
      <>
        1. Connect to wifiduck : wifiduck
        <br/>
        2. Open 192.168.4.1 in your browser
        <br/>
        3. Create and run your BadUSB scripts
      </>
    ),
  },
  {
    title: 'Wireless',
    Svg: require('@site/static/img/wireless.svg').default,
    description: (
      <>
        Manage your scripts from a web interface.
        <br />
        No need to copy compile or copy them onto a SD card.
      </>
    ),
  },
  {
    title: 'Learn & Test',
    Svg: require('@site/static/img/test.svg').default,
    description: (
      <>
        Perfect for testing keystroke injection attacks and learning about BadUSBs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
