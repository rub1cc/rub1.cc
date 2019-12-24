import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles.scss';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <img className="my-photo" src="/static/me.jpg" alt="Farazaulia photo" />
          <div>
            <h1>👋 Hi, My name is <u>Faraz</u></h1>
            <h2>I am a software engineer.</h2>
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
    );
  }
}

export default Index;
