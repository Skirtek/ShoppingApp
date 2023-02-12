import { useState, useCallback, useEffect } from "react";
import { ProductApi } from "../../api/ProductApi";
import { PageableResponse } from "../../models/api/PageableResponse";
import { ProductDto } from "../../models/api/ProductDto";
import { PaginationItem } from "./PaginationItem";
import {
  ItemsContainer,
  Loader,
  PaginationContainer,
  StoreContainer,
} from "./Store.styles";
import { StoreItem } from "./StoreItem";

export const Store = () => {
  const [products, setProducts] = useState<PageableResponse<ProductDto> | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(0);
  // FAJNY PATTERN
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await ProductApi.getAll(pageNumber);
      setProducts(result.data);
    } finally {
      // Finally żeby zawsze odwołać loader
      setIsLoading(false);
    }
  }, [pageNumber]);

  const onPageChanged = (number: number) => {
    setPageNumber(number - 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, pageNumber]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StoreContainer>
      <h1>Zamów najlepsze produkty - najtaniej!</h1>
      {products?.content && products.content.length > 0 ? (
        <>
          <ItemsContainer>
            {products?.content.map((x) => (
              <StoreItem product={x} />
            ))}
          </ItemsContainer>
          <PaginationContainer>
            {Array.from({ length: products.totalPages }).map((x, i) => (
              <PaginationItem onPageChanged={onPageChanged} number={i + 1} />
            ))}
          </PaginationContainer>
        </>
      ) : (
        <h2>Nie mamy aktualnie żadnych produktów, zajrzyj do nas później</h2>
      )}
    </StoreContainer>
  );
};
