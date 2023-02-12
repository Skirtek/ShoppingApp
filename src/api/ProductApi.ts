import { authorizedApi } from "../hooks/withAxiosIntercepted";
import { PageableResponse } from "../models/api/PageableResponse";
import { ProductDto } from "../models/api/ProductDto";

export class ProductApi {
  static getAll = async (pageNumber: number) =>
    await authorizedApi.get<PageableResponse<ProductDto>>("/product/getAll", {
      params: {
        page: pageNumber,
      },
    });
}
