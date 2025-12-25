import styled from "styled-components";

import { Button, Typography, Input, Form } from 'antd';

const { Title } = Typography;

export const StyledTableFormWrapper = styled.div`
  border-radius: 30px;
  background: #FFFFFF;
  min-width: 379px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledTitle = styled(Title)`
  font-weight: 700 !important;
  margin: 0;
`;

export const StyledInput = styled(Input)`
  height: 39px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledButton = styled(Button)`
  border-radius: 6px;
  background: #1FA46C;
  color: #FFFFFF;
  height: 39px;
  width: 100%;
`;

export const ChipsButtonBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6;
`;

export const StyledChipsButton = styled(Button)`
  border-radius: 30px;
  border: none;
  background: #F4F5F6;
  color: #000000;
  height: 31px;
  margin: 6px;
`;
