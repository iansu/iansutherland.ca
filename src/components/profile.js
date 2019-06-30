import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import IanSutherlandProfile from '../assets/images/ian-sutherland-profile.jpg';

const ProfileContainer = styled.div`
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

const ProfilePhotoContainer = styled.div`
  margin-right: 2rem;

  @media (max-width: 576px) {
    margin: 1rem 0;
  }
`;

const ProfilePhoto = styled.div`
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

const ProfileText = styled.h2`
  font-size: 1.1em;
  font-weight: normal;
`;

const Profile = props => (
  <ProfileContainer>
    <ProfilePhotoContainer>
      <ProfilePhoto>
        <img src={IanSutherlandProfile} alt="Ian Sutherland head shot" />
      </ProfilePhoto>
    </ProfilePhotoContainer>
    <ProfileText>
      I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer
      of <a href="https://github.com/facebook/create-react-app">Create React App</a> and I
      contribute to <a href="https://github.com/nodejs/node">Node.js</a>. I also work on a number of
      other open source projects, mostly in the JavaScript ecosystem.{' '}
      {props.more && (
        <>
          More <Link to="/about">about me</Link>.
        </>
      )}
    </ProfileText>
  </ProfileContainer>
);

export default Profile;
