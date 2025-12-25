import styled from "styled-components";
import { EditFilled } from '@ant-design/icons';
import { DeleteFilled } from '@ant-design/icons';

export const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  justify-content: center;
`;

export const StyledEditFilled = styled(EditFilled)`
  font-size: 12px;
  color: #999999;
`;

export const StyleDeleteFilled = styled(DeleteFilled)`
  font-size: 12px;
  color: #999999;
`;
