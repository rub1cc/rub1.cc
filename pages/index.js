import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles.scss';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="jsx-2756927243">
        <section>
          <h2>👋 Hi, I am</h2>
          <h1>Faraz</h1>
        </section>
        <nav>
          <a href="https://twitter.com/farazaulia" target="_blank">
            <FontAwesomeIcon icon={faTwitter}/> Tweets
          </a>
          <a href="https://blog.farazaulia.me" target="_blank">
            <FontAwesomeIcon icon={faPencilAlt}/> Writings
          </a>
          <a href="https://github.com/farazaulia" target="_blank">
            <FontAwesomeIcon icon={faGithub}/> Code
          </a>
          <a href="https://linkedin.com/in/farazaulia" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/> More
          </a>
        </nav>
      </main>
    );
  }
}

export default Index;
