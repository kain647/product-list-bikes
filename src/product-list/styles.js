import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 1250px;
  height: 800px;
  margin: 0 auto;
  grid-template-areas: "nav cover product";
  grid-template-columns: 90px 500px 1fr;
  grid-gap: 0;
  font-family: "Space Grotesk", sans-serif;
  background-color: #f6f5f7;
  box-shadow: 0 20px 70px rgb(0 0 0 / 40%);
  overflow-x: scroll;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-area: nav;
  grid-template-rows: auto 1fr;
  position: relative;
  padding: 28px;
  color: #fff;
  background-color: #08090a;
`;
export const LogoContainer = styled.div`
  display: flex;
  svg {
    --size: 32px;
    width: var(--size);
    height: auto;
    fill: #fc302b;
  }
`;
export const NavText = styled.div`
  display: flex;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
`;
export const NavCart = styled.div`
  display: flex;
  .Cart {
    --size: 24px;
    width: var(--size);
    height: auto;
    fill: #fff;
  }
`;
export const Number = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  --size: 14px;
  width: var(--size);
  height: var(--size);
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  padding: 2px;
  border-radius: 50%;
  background-color: #ff0000;
  border: 2px solid #08090a;
  right: 20px;
  bottom: 40px;
`;
export const Cover = styled.image`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: cover;
  background-image: url(images/background.jpg);
  background-size: cover;
  margin-right: 6px;
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  font-family: "Space Grotesk", sans-serif;
  word-wrap: break-word;
`;
export const Product = styled.div`
  display: flex;
  box-sizing: border-box;
  grid-area: product;
  width: 310px;
  flex: 0 0 auto;
`;
export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-right: 6px;
  padding: 36px;
  transition: 0.6s;
  :last-child {
    margin-right: 0;
  }
  :hover {
    box-shadow: 0 4px 0 0 #fc302b inset;
    .PhotoBike {
      transform: scale(1.1);
      outline: none;
      border: none;
      box-shadow: none;
      text-decoration: none;
      border-color: transparent;
    }
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;
export const PhotoBike = styled.div`
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  width: 238px;
  height: 178px;
  margin: 40px 0;
  transition: 0.6s;
`;
export const BrandBike = styled.div`
  text-transform: uppercase;
  text-align: center;
`;
export const ProductTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0;
  text-transform: capitalize;
`;
export const Price = styled.div`
  margin-bottom: 30px;
`;
export const Subtitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  color: #414041;
  line-height: 1.5em;
  font-size: 14px;
  overflow: hidden;
  margin-bottom: auto;
`;
export const DetailButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
`;
export const ModalHeader = styled.div`
  display: flex;
  position: sticky;
  margin-left: auto;
  padding: 25px;
  top: 0;
  z-index: 1;
  svg {
    --size: 36px;
    width: var(--size);
    height: var(--size);
    color: #fff;
    border-radius: 50%;
    background-color: #00000080;
    cursor: pointer;
  }
`;
export const ProductNew = styled.h3`
  display: flex;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const ProductImage = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
export const RidingType = styled.div`
  display: flex;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
`;
export const ProductModalTitle = styled.div`
  display: flex;
  font-size: 44px;
  max-width: none;
  font-weight: 500;
  margin: 20px 0;
  text-transform: capitalize;
`;
export const ProductPrice = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 30px;
`;
export const ProductButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
export const ButtonCart = styled.button`
  display: flex;
  text-transform: uppercase;
  color: #fff;
  border-radius: 4px;
  background-color: #fc302b;
  border: 1px solid #fc302b;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;
export const ProductOption = styled.button`
  display: flex;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #08090a;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-right: -1px;
  cursor: pointer;
  &.ProductTable {
    display: flex;
    width: 100%;
    justify-content: center;
    border-color: #323132;
    border-radius: 4px;
    margin: 25px auto;
    background-color: #323132;
    color: #fff;
  }
  &.active {
    background-color: #08090a;
    color: #fff;
    border-color: #08090a;
  }
`;
export const ProductSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 70px;
  color: #414041;
  line-height: 1.5em;
  font-size: 14px;
`;
export const ProductDetailImage = styled.div`
  display: flex;
  img {
    width: 100%;
    height: auto;
  }
`;
export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
`;
export const CellHead = styled.th`
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
  margin-bottom: 30px;
`;
export const Cell = styled.td`
  display: flex;
  width: 100%;
  &.name {
    text-transform: uppercase;
  }
`;
export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 33.333%;
    max-height: 320px;
    object-fit: cover;
  }
`;
