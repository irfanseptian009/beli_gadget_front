import styled from "styled-components";
import Center from "@/components/Center";
import ProductBox from "@/components/ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:20px;
  padding-top: 20px;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <ProductsGrid>
        {products?.length > 0 && products.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
