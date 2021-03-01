import React from "react";
import ModalBike from "./modal";
import { bikes } from "./data";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import {
  Container,
  Nav,
  LogoContainer,
  NavText,
  NavCart,
  Number,
  Cover,
  Product,
  ProductContainer,
  Title,
  PhotoBike,
  BrandBike,
  ProductTitle,
  Price,
  Subtitle
} from "./styles";

const Bikes = props => {
  return (
    <Container>
      <Nav>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavText>Specialized - Mountain Bikes</NavText>
        <NavCart>
          <Number>3</Number>
          <Cart className="Cart" />
        </NavCart>
      </Nav>
      <Cover>
        Mountain <br /> Bikes
      </Cover>
      <Product>
        {Object.values(bikes).map(bike => {
          return <Bike {...bike} />;
        })}
      </Product>
    </Container>
  );
};

const Bike = props => {
  const { title, photo, type, productTitle, price, subtitle, id } = props;
  return (
    <ProductContainer>
      <Title>{title}</Title>
      <PhotoBike className="PhotoBike">
        <img src={`/images/${photo}`} />
      </PhotoBike>
      <BrandBike>{type}</BrandBike>
      <ProductTitle>{productTitle}</ProductTitle>
      <Price>{price}</Price>
      <Subtitle>{subtitle}</Subtitle>
      <ModalBike id={id} />
    </ProductContainer>
  );
};
export default Bikes;
