'use client';

import { useEffect } from 'react';

export default function KitSignupForm() {
  useEffect(() => {
    // Avoid loading the script more than once
    if (document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]')) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <form
      action="https://app.kit.com/forms/9200678/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="9200678"
      data-uid="2b3aca331d"
      data-format="inline"
      data-version="5"
      style={{ backgroundColor: 'rgb(249, 250, 251)', borderRadius: '4px' }}
    >
      <div data-style="minimal">
        <div
          className="formkit-header"
          data-element="header"
          style={{ color: 'rgb(77, 77, 77)', fontSize: '27px', fontWeight: 700 }}
        >
          <h2>VA Rate Watch</h2>
        </div>
        <div
          className="formkit-subheader"
          data-element="subheader"
          style={{ color: 'rgb(104, 104, 104)', fontSize: '18px' }}
        >
          <p>
            Get weekly VA rate updates — plain-English market analysis delivered to your inbox
            every Monday. No spam, no sales pitches.
          </p>
        </div>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        />
        <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required
              type="email"
              style={{
                color: 'rgb(0, 0, 0)',
                borderColor: 'rgb(227, 227, 227)',
                borderRadius: '4px',
                fontWeight: 400,
              }}
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit"
            style={{
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(22, 119, 190)',
              borderRadius: '4px',
              fontWeight: 400,
            }}
          >
            <div className="formkit-spinner">
              <div />
              <div />
              <div />
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div
          className="formkit-guarantee"
          data-element="guarantee"
          style={{ color: 'rgb(77, 77, 77)', fontSize: '13px', fontWeight: 400 }}
        >
          <p>We won&apos;t send you spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </form>
  );
}
