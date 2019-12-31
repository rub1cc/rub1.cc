import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from "next/head";
import React, { Component, Fragment } from 'react';
import '../styles.scss';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Faraz Aulia - Mobile &amp; Web App Developer</title>
        </Head>
        <main>
          <section>
            <img className="my-photo" src="/static/me.jpg" alt="Farazaulia photo" />
            <div>
              <h1>👋 Hi, My name is <u>Faraz</u></h1>
              <h2>I am a Mobile &amp; Web App Developer.</h2>
              <br/>
              <h2 className="fan-of">
                Big fan of
                <span id="react-native" className="hashtag">React Native</span>
                <span id="nextjs" className="hashtag">NextJS</span>
                <span id="redux" className="hashtag">Redux</span>
                <span id="sass" className="hashtag">Sass</span>
              </h2>
            </div>
          </section>
          <nav>
            <a href="https://twitter.com/farazaulia" target="_blank">
              <FontAwesomeIcon icon={faTwitter} /> Tweets
          </a>
            <a href="https://medium.com/@farazaulia" target="_blank">
              <FontAwesomeIcon icon={faPencilAlt} /> Writings
          </a>
            <a href="https://github.com/farazaulia" target="_blank">
              <FontAwesomeIcon icon={faGithub} /> Code
          </a>
            <a href="https://linkedin.com/in/farazaulia" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} /> More
          </a>
            <a href="mailto:raz.muhammad14@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Get in touch!
          </a>
          </nav>
        </main>
      </Fragment>
    );
  }
}

export default Index;
