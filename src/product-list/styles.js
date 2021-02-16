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
export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: cover;
  background-image: ${({ bg }) => `url(${bg})`};
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
`;
export const ProductTitle = styled.div`
  max-width: 12ch;
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
  color: #414041;
  line-height: 1.5em;
  font-size: 14px;
  margin-bottom: 20px;
`;
export const More = styled.button`
  margin-top: auto;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px;
  cursor: pointer;
`;
