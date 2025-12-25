import { Button, Layout, Menu } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #FFFFFF;
  height: 64px;
  justify-content: space-between;
  padding: 0px 48px;
`;

export const StyledMenu = styled(Menu)`
  width: 274px;
  border: none;

  && .ant-menu-item:hover::after{
    border-bottom: 2px solid #1FA46C !important;
  }

  && .ant-menu-item:hover{
    font-weight: 600 !important;
    color: #1FA46C !important;
  }
`;

export const StyledButton = styled(Button)`
  font-weight: 600 !important;
  size: 14px !important;
  line-height: 170% !important;
  letter-spacing: 0px !important;
`;
