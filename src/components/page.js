import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const Page = props => <PageContainer className={props.name}>{props.children}</PageContainer>;

export default Page;
