import { HomeContainer, StyledHeading, StyledShoppingDrawing } from "./Home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <StyledShoppingDrawing />
      <StyledHeading>Witaj w sklepie Frostonni Store</StyledHeading>
      <span>Aby coś zamówić przejdź do zakładki 'Store'</span>
    </HomeContainer>
  );
};
