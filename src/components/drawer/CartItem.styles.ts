import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Thumbnail = styled.img`
  height: 100px;
  width: 150px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Amount = styled.span`
  font-size: 13px;
`;

export const TotalPrice = styled.span`
  font-size: 18px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

export const RemoveItem = styled.button`
    background-color: transparent;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 16px;
    color: #FF8886;
    border: 1px solid #FF8886;
    cursor: pointer;
`