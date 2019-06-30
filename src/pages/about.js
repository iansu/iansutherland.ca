import React from 'react';
import styled from 'styled-components';

import Page from '../components/page';
import Layout from '../components/layout';
import Profile from '../components/profile';
import Columns from '../components/columns';
import Column from '../components/column';
import Icon from '../components/icon';

const Elsewhere = styled.div`
  ul {
    padding-left: 0;
    list-style-type: none;

    @media (max-width: 759px) {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const Item = styled.li`
  display: inline;
  margin-right: 1.5rem;

  @media (max-width: 759px) {
    margin-bottom: 0.5rem;
    width: 40%;
  }

  a {
    display: inline-flex;
    border: 0;
    box-shadow: none;

    span {
      margin-left: 0.4rem;
    }
  }

  a:hover {
    background-color: transparent;
    border: 0;

    svg {
      color: ${props => props.hoverColor};
    }
  }
`;

const AboutPage = () => {
  return (
    <Page name="AboutPage">
      <Layout>
        <Profile />
        <p>
          I&rsquo;ve been building software professionally for over 15 years. I have a B.Sc. in
          Computer Science from the University of Calgary and I&rsquo;ve built web, mobile, desktop
          and server applications in a variety of languages. I currently work as a Principle
          Software Engineer at <a href="https://www.neofinancial.com/">Neo Financial</a>.
        </p>
        <p>
          If you&rsquo;re interested in my open source work take a look at my{' '}
          <a href="https://github.com/iansu">GitHub</a> profile or follow me on{' '}
          <a href="https://twitter.com/iansu">Twitter</a>. If you&rsquo;re interested in my
          professional work you can connect with me on{' '}
          <a href="https://www.linkedin.com/in/iansu">LinkedIn</a>.
        </p>
        <h3 className="mt-4 mb-0">Elsewhere</h3>
        <Elsewhere className="mb-1">
          <ul>
            <Item hoverColor="#1da1f2">
              <a href="https://twitter.com/iansu">
                <Icon name="twitter" /> <span>Twitter</span>
              </a>
            </Item>
            <Item>
              <a href="https://github.com/iansu">
                <Icon name="github" /> <span>GitHub</span>
              </a>
            </Item>
            <Item hoverColor="#0077B5">
              <a href="https://www.linkedin.com/in/iansu">
                <Icon name="linkedin" /> <span>LinkedIn</span>
              </a>
            </Item>
            <Item>
              <a href="https://angel.co/iansu">
                <Icon name="angellist" /> <span>AngelList</span>
              </a>
            </Item>
            <Item hoverColor="#E4405F">
              <a href="https://www.instagram.com/iansutherland/">
                <Icon name="instagram" /> <span>Instagram</span>
              </a>
            </Item>
            <Item hoverColor="#1ED760">
              <a href="https://open.spotify.com/user/iansutherland.ca">
                <Icon name="spotify" /> <span>Spotify</span>
              </a>
            </Item>
          </ul>
        </Elsewhere>
        <Columns>
          <Column>
            <h3 className="mt-3 mb-1">About This Site</h3>
            <p>
              This site is built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on{' '}
              <a href="https://www.netlify.com/">Netlify</a>. The icons are from{' '}
              <a href="https://simpleicons.org/">Simple Icons</a>. The{' '}
              <a href="https://github.com/iansu/iansutherland.ca">source code</a> is available on
              GitHub under the MIT license.
            </p>
          </Column>
          <Column>
            <h3 className="mt-3 mb-1">Get In Touch</h3>
            <p>
              Got something to say? Want to take over the world? Send me a message on{' '}
              <a href="https://twitter.com/iansu">Twitter</a> or, if you&rsquo;re not into the whole
              brevity thing, <a href="mailto:hello@iansutherland.ca">send me an email</a>.
            </p>
          </Column>
        </Columns>
      </Layout>
    </Page>
  );
};

export default AboutPage;
