import styled from "styled-components";
import { Button, Typography } from 'antd';

const { Title } = Typography;

export const StyledTableWrapper = styled.div`
  border-radius: 30px;
  background: #FFFFFF;
  width: 100%;
`;

export const StyledTableHeaderWithActions = styled.div`
  display: flex;
  padding: 32px 0px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  font-weight: 700 !important;
  padding: 0px 32px;
  margin: 0;
`;

export const StyledButton = styled(Button)`
  size: 12px !important;
  line-height: 150% !important;
  letter-spacing: 0px !important;
`;

export const StyledFilterButton = styled(Button)`
  size: 12px !important;
  width: 100%;
  line-height: 150% !important;
  letter-spacing: 0px !important;
`;

export const StyledLabel = styled.span`
  size: 12px !important;
  line-height: 150% !important;
  letter-spacing: 0px !important;
  font-weight: 600;
  color: #1FA46C;
  border-bottom: solid 2px #1FA46C;
`;
