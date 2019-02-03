import { schema } from "normalizr";
import { splitLines } from "../components/utils/splitLines";

export default new schema.Entity(
  "products",
  {},
  {
    idAttribute: "id",
    processStrategy(product) {
      return {
        ...product,
        key: product.id,
        splittedDescription: splitLines(product.description)
      };
    }
  }
);
