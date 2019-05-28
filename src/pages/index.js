import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

import IanSutherlandProfile from '../assets/images/ian-sutherland-profile.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f4f6f8;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const HeroProfile = styled.div`
  margin-right: 2rem;

  @media (max-width: 576px) {
    margin: 1rem 0;
  }
`;

const HeroPhoto = styled.div`
  box-sizing: content-box;
  width: 120px;
  height: 120px;
  border: 5px solid #d6dade;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 576px) {
    width: 150px;
    height: 150px;
  }

  & img {
    margin: -2px 0 0 -5px;
    width: 125px;
    height: 125px;

    @media (max-width: 576px) {
      width: 155px;
      height: 155px;
    }
  }
`;

const HeroText = styled.h2`
  font-size: 1.1em;
  font-weight: normal;
`;

const HomePage = () => {
  return (
    <PageContainer className="HomePage">
      <Layout>
        <HeroContainer>
          <HeroProfile>
            <HeroPhoto>
              <img src={IanSutherlandProfile} alt="Ian Sutherland head shot" />
            </HeroPhoto>
          </HeroProfile>
          <HeroText>
            I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer of{' '}
            <a href="https://github.com/facebook/create-react-app">Create React App</a> and I also
            contribute to a number of other open source projects, including{' '}
            <a href="https://github.com/nodejs/node">Node.js</a>,{' '}
            <a href="https://github.com/facebook/react">React</a> and{' '}
            <a href="https://github.com/yarnpkg/yarn">Yarn</a>.
          </HeroText>
        </HeroContainer>
        <p>
          I&rsquo;ve been building software professionally for over 15 years. I have a B.Sc in
          Computer Science from the University of Calgary and I&rsquo;ve built web, mobile, desktop
          and server applications in a variety of languages. I currently work as a Principle Software Engineer at{' '}
          <a href="https://www.neofinancial.com/">Neo Financial</a>.
        </p>
        <p>
          If you&rsquo;re interested in my open source work take a look at my{' '}
          <a href="https://github.com/iansu">GitHub</a> profile or follow me on{' '}
          <a href="https://github.com/iansu">Twitter</a>. If you&rsquo;re interested in my
          professional work you can connect with me on{' '}
          <a href="http://www.linkedin.com/in/iansu">LinkedIn</a>.
        </p>
      </Layout>
    </PageContainer>
  );
};

export default HomePage;
