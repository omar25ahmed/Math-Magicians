import React from 'react';
import './Quote.css';

function Quote() {
  return (
    <div className="quote-page">
      <figure>
        <blockquote cite="https://www.huxley.net/bnw/four.html">
          <p>
            Mathematics as an expression of the human mind reflects the active will,
            the contemplative reason, and the desire for aesthetic perfection.
            Its basic elements are logic and intuition, analysis and construction,
            generality and individuality.
          </p>
        </blockquote>
        <figcaption>
          Richard Courant,
          <cite>German-American mathematician</cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default Quote;
