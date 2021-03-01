import React from "react";
import Modal from "react-modal";
import { getBikeBiId } from "./data";
import { MdClose } from "react-icons/md";
import {
  DetailButton,
  ModalContainer,
  ModalHeader,
  ProductNew,
  ProductImage,
  RidingType,
  ProductModalTitle,
  ProductPrice,
  ProductButtons,
  ProductOptions,
  ButtonCart,
  ProductOption,
  ProductSubtitle,
  ProductDetailImage,
  TableRow,
  CellHead,
  Cell,
  ProductGrid
} from "./styles";

const ModalBike = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = props => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      boxSizing: "border-box",
      height: "800px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      borderRadius: "0"
    }
  };
  const bikeData = getBikeBiId(props.id);
  const {
    type,
    photo,
    title,
    productTitle,
    price,
    features,
    photoBike,
    frame,
    fork,
    hubFront,
    hubRear,
    rim,
    shifter,
    frontDerailleur,
    rearDerailleur,
    brake,
    motor,
    weight,
    productGrid1,
    productGrid2,
    productGrid3,
    productGrid4,
    productGrid5,
    productGrid6
  } = bikeData;

  return (
    <div>
      <DetailButton onClick={openModal}>view details</DetailButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <ModalHeader>
            <MdClose onClick={closeModal} />
          </ModalHeader>
          <ProductNew>{title}</ProductNew>
          <ProductImage>
            <img src={`/images/${photo}`} />
          </ProductImage>
          <RidingType>{type}</RidingType>
          <ProductModalTitle>{productTitle}</ProductModalTitle>
          <ProductPrice>{price}</ProductPrice>
          <ProductButtons>
            <ProductOptions>
              <ProductOption>XS</ProductOption>
              <ProductOption>S</ProductOption>
              <ProductOption className="active">M</ProductOption>
              <ProductOption>ML</ProductOption>
            </ProductOptions>
            <ButtonCart>Add to cart</ButtonCart>
          </ProductButtons>
          <ProductSubtitle>
            <p>{features}</p>
          </ProductSubtitle>
          <ProductDetailImage>
            <img src={`/images/${photoBike}`} />
          </ProductDetailImage>
          <table
            style={{
              backgroundColor: "#08090a",
              color: "#fff",
              width: "100%",
              padding: "70px 100px",
              flexDirection: "column"
            }}
          >
            <thead>
              <TableRow>
                <CellHead>TECHNICAL SPECIFICATIONS</CellHead>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <Cell className="name">frame</Cell>
                <Cell>{frame}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">fork</Cell>
                <Cell>{fork}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Hub front</Cell>
                <Cell>{hubFront}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Hub rear</Cell>
                <Cell>{hubRear}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Rim</Cell>
                <Cell>{rim}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Shifter</Cell>
                <Cell>{shifter}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Front derailleur</Cell>
                <Cell>{frontDerailleur}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Rear derailleur</Cell>
                <Cell>{rearDerailleur}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Brake</Cell>
                <Cell>{brake}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Motor</Cell>
                <Cell>{motor}</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Weight</Cell>
                <Cell>{weight}</Cell>
              </TableRow>
            </tbody>
            <ProductOption className="ProductTable">
              all specifications
            </ProductOption>
          </table>
          <ProductGrid>
            <img src={`/images/${productGrid1}`} />
            <img src={`/images/${productGrid2}`} />
            <img src={`/images/${productGrid3}`} />
            <img src={`/images/${productGrid4}`} />
            <img src={`/images/${productGrid5}`} />
            <img src={`/images/${productGrid6}`} />
          </ProductGrid>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ModalBike;
