import React from "react";
import bg from "../upload/background.jpg";
import marlin from "../upload/Marlin6Women.jpg";
import levo from "../upload/Slash98XT.jpg";
import powerfly from "../upload/Slash7NX.jpg";
import jumper from "../upload/TopFuel7SX.jpg";
import frameset from "../upload/XCaliber9.jpg";
import precaliber from "../upload/Precaliber.jpg";
import { ReactComponent as Logo } from "../upload/logo.svg";
import { ReactComponent as Cart } from "../upload/cart.svg";
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
  Subtitle,
  More
} from "./styles";

const Bikes = props => {
  const bikes = [
    {
      title: "new",
      photo: marlin,
      brand: "epic",
      productTitle: "marlin 6 women's",
      price: "$699.99",
      subtitle:
        "Marlin 6 Women's is a cross country mountain bike built to give you an efficient off-road ride with a suspension fork that locks out, and smoother-shifting 2x8 drivetrain. It's made for mountain biking, but it's also equipped with features like rack and kickstand mounts that make it a great choice for adventurous daily commutes.",
      more: "VIEW DETAILS"
    },
    {
      title: "new",
      photo: levo,
      brand: "turbo levo",
      productTitle: "Turbo Levo SL Expert Carbon",
      price: "$9,025",
      subtitle:
        "The Turbo Levo SL is a new, lightweight breed of eMTB that harnesses the quick and lively ride of our Stumpjumper...and adds just enough power to introduce a whole new dimension of kick ass. The Turbo Levo SL Expert Carbon features a full carbon frame paired to full FOX suspension and a SRAM Eagle GX drivetrain.",
      more: "VIEW DETAILS"
    },
    {
      title: "new",
      photo: powerfly,
      brand: "enduro",
      productTitle: "Powerfly FS 9 Equipped",
      price: "$5,999.99",
      subtitle:
        "Powerfly FS 9 EQ is a full suspension electric mountain bike that’s built for singletrack sessions and rugged commutes. You get high-end parts, a powerful drive system, and a rad suspension setup for tackling rougher trails. And, it comes with utility-focused features for daily riding, like fenders, lights, and a rear rack.",
      more: "VIEW DETAILS"
    },
    {
      title: "new",
      photo: jumper,
      brand: "STUMPJUMPER",
      productTitle: "Enduro S-WORKS 2020",
      price: "$9,750",
      subtitle:
        "This is the bike that defines the very genre that bears its name. The S-Works Enduro features a bomber-yet-lightweight carbon frame that blissfully tackles the kind of terrain that chews up and spits out lesser bikes. And it's absolutely dressed to kill. Let the drooling begin.",
      more: "VIEW DETAILS"
    },
    {
      title: "new",
      photo: frameset,
      brand: "TURBO LEVO",
      productTitle: "Ticket DJ Frameset",
      price: "$879.99",
      subtitle:
        "Ticket DJ is a lightweight, durable dirt jump mountain bike frame with a compact rear end and roomy top tube for major style, the best handling, and the biggest tricks. Horizontal sliding dropouts let you choose between a singlespeed or geared setup for a personalized ride.",
      more: "VIEW DETAILS"
    },
    {
      title: "new",
      photo: precaliber,
      brand: "epic",
      productTitle: "Precaliber Suspension",
      price: "$389.99",
      subtitle:
        "Precaliber 24 8-Speed is a versatile kids' bike built for young adventurers who love riding off the pavement and into the dirt. It has a sturdy yet light aluminum frame with a performance suspension fork and an 8-speed drivetrain perfect for racing home from school, zipping through the woods.",
      more: "VIEW DETAILS"
    }
  ];
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
      <Cover bg={bg}>
        Mountain <br /> Bikes
      </Cover>
      <Product>
        {bikes.map(bike => {
          return <Bike {...bike} />;
        })}
      </Product>
    </Container>
  );
};

const Bike = props => {
  const { title, photo, brand, productTitle, price, subtitle, more } = props;
  return (
    <ProductContainer>
      <Title>{title}</Title>
      <PhotoBike className="PhotoBike">
        <img src={photo} />
      </PhotoBike>
      <BrandBike>{brand}</BrandBike>
      <ProductTitle>{productTitle}</ProductTitle>
      <Price>{price}</Price>
      <Subtitle>{subtitle}</Subtitle>
      <More>{more}</More>
    </ProductContainer>
  );
};
export default Bikes;
