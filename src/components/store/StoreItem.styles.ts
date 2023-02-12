import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 16px;
`;

export const ItemPhoto = styled.img`
  width: 100%;
  height: 300px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  margin: 8px 0;
`;

export const RightSide = styled.div`
  text-align: right;
  margin: 8px 0;
`;

export const ImportantInfo = styled.span`
  font-size: 18px;
  font-weight: 600;
`
