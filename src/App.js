import React from 'react';
import Header from './components/header';
import Events from './components/events';
import Footer from './components/footer';

export default props => (
  <div>
    <Header
      title="Decentralized Blockchain Events"
      subtitle="CryptoCurrency events about Blockchain, Bitcoin and Ethereum around the world."
    />
    <main className="section">
      <div className="container">
        <p>
          Events are fetched from{' '}
          <a href="https://www.meetup.com/">meetup.com</a> and{' '}
          <a href="https://www.eventbrite.com/">eventbrite.com</a> that is
          categorized with tech and from our GitHub every hour.{' '}
          <a
            href="https://github.com/reftoken/devents-events/issues/new"
            rel="noopener noreferrer"
            target="_blank"
          >
            Missing your event? Submit it!
          </a>
        </p>
        <br />
        <Events history={props.history} />
      </div>
    </main>
    <Footer />
  </div>
);
