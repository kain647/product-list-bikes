import React from "react";
import Modal from "react-modal";
import marlin from "../upload/Marlin6Women.jpg";
import marlinW from "../upload/Marlin6556.jpg";
import marlin8541 from "../upload/marlin8541.jpg";
import marlin9526 from "../upload/marlin9526.jpg";
import marlin9658 from "../upload/marlin9658.jpg";
import marlin9695 from "../upload/marlin9695.jpg";
import marlin9558 from "../upload/marlin9558.jpg";
import marlin1439 from "../upload/marlin1439.jpg";
import { MdClose } from "react-icons/md";
import {
  DetailButton,
  ModalContainer,
  ModalHeader,
  ProductNew,
  ProductImage,
  ProductBrand,
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

const ModalBike = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <ProductNew>new</ProductNew>
          <ProductImage>
            <img src={marlin} />
          </ProductImage>
          <ProductBrand>epic</ProductBrand>
          <ProductModalTitle>Marlin 6 Women's</ProductModalTitle>
          <ProductPrice>$699.99</ProductPrice>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pharetra nisi non tellus faucibus, ac accumsan nibh
              aliquam. Nam dictum tincidunt arcu, eu tristique neque tristique
              at. Pellentesque quis imperdiet quam, interdum porta ante. Nullam
              vehicula neque vitae accumsan bibendum. Duis a imperdiet libero.
              Sed consequat nunc sed tellus fermentum, eget pharetra neque
              luctus. Mauris aliquet malesuada eros in euismod. Quisque eget
              purus vel tortor euismod suscipit nec vel urna. Nam ac eleifend
              augue. Nullam luctus ligula ligula, vulputate pretium enim aliquet
              sit amet.
            </p>
            <p>
              Integer et aliquam est, sed lobortis dolor. Aliquam faucibus orci
              eget ligula aliquam egestas. Praesent consequat diam tellus, ut
              vestibulum diam finibus ac. Donec vitae sollicitudin tortor. Nam
              ut rutrum elit. Donec a est pretium, tempor ante ut, auctor nibh.
              Aliquam tempus tristique est vehicula vestibulum. Vestibulum
              viverra quam vitae nibh cursus placerat. Nunc facilisis tincidunt
              ex, vel ornare dui consectetur sodales. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum facilisis pretium
              congue. Praesent tincidunt auctor posuere. Praesent euismod urna
              eget magna lacinia, ac gravida nibh dapibus. Ut id erat neque.
              Nulla blandit purus eu gravida malesuada. Aenean in pharetra ante,
              ac suscipit orci.
            </p>
            <p>
              Donec ullamcorper sodales dui, sit amet dapibus eros lobortis et.
              Duis tellus sem, ultrices quis risus quis, ornare fermentum risus.
              Cras in erat sit amet libero dictum faucibus dictum id lacus.
              Suspendisse augue eros, finibus ac vulputate a, vehicula volutpat
              nisl. Nunc dictum pretium tortor, sit amet sollicitudin lacus
              commodo non. Pellentesque aliquam magna eu placerat aliquet.
              Aliquam consectetur urna a lectus euismod maximus. Sed ac metus
              urna. Sed nec scelerisque quam. Nunc faucibus ipsum nec rhoncus
              scelerisque. Donec porttitor tellus eu augue imperdiet porttitor.
            </p>
          </ProductSubtitle>
          <ProductDetailImage>
            <img src={marlinW} />
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
                <Cell>
                  Alpha Silver Aluminum, internal routing, chainstay disc brake
                  mount, rack and kickstand mount, 135x5mm QR
                </Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">fork</Cell>
                <Cell>Size: M , ML
                  SR Suntour XCT 30, coil spring, preload, hydraulic lockout, 100mm QR, 100mm travel</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Hub front</Cell>
                <Cell>
                  Formula DC-20, alloy, 6-bolt, 5x100mm QR
                </Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Hub rear</Cell>
                <Cell>
                  Formula DC-22, alloy, 6-bolt, Shimano 8/9/10 freehub, 135x5mm QR
                </Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Rim</Cell>
                <Cell>Bontrager Connection, double-wall, 32-hole, 20mm width, schrader valve</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Shifter</Cell>
                <Cell>
                  Shimano Altus M315, 8 speed
                </Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Front derailleur</Cell>
                <Cell>Shimano Altus M315, 34.9mm clamp, top swing, dual pull</Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Rear derailleur</Cell>
                <Cell>
                  Shimano Altus M310
                </Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Brake</Cell>
                <Cell>
                  Size: M , ML
                  Tektro HD-M275 hydraulic disc
                </Cell>
              </TableRow>
              <TableRow>
                <Cell className="name">Weight</Cell>
                <Cell>
                  M - 14.37 kg / 31.67 lbs (with tubes)
                </Cell>
              </TableRow>
            </tbody>
            <ProductOption className="ProductTable">
              all specifications
            </ProductOption>
          </table>
          <ProductGrid>
            <img src={marlin8541} />
            <img src={marlin9526} />
            <img src={marlin9658} />
            <img src={marlin9695} />
            <img src={marlin9558} />
            <img src={marlin1439} />
          </ProductGrid>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ModalBike;
