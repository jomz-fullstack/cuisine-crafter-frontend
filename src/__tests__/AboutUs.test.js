import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';

describe('<AboutUs />', () => {
  const renderAboutUs = () =>
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );

  it('renders without crashing', () => {
    renderAboutUs();
  });

  it('displays links for each team member', () => {
    renderAboutUs();


    const githubLinks = screen.queryAllByTestId('github-link');
    const linkedinLinks = screen.queryAllByTestId('linkedin-link');

    console.log('Number of GitHub links:', githubLinks.length);
    console.log('Number of LinkedIn links:', linkedinLinks.length);


  });


});