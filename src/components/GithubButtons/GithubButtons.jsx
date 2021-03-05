import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://eldion-landing.netlify.app"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="https://eldion-landing.netlify.app/"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://eldion-landing.netlify.app"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="https://eldion-landing.netlify.app/"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
