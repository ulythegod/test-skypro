import styled from "styled-components";
import { Layout } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 0 48px;
  background: #F4F5F6;
  height: 100vh;
`;

export const StyledTitle = styled(Title)`
  font-weight: 700 !important;
  padding: 32px 0px;
  margin: 0;
`;