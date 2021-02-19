import React from "react";
import styled, { css } from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: ${(props) => (props.large ? "" : "center")};
  justify-content: center;
  z-index: 200;
`;

const Box = styled.div`
  background: white;
  width: 400px;
  border-radius: 5px;

  ${(props) =>
    props.large &&
    css`
      width: 700px;
      height: 80vh;
      margin-top: 15vh;
    `}
`;

const VERTICAL_GAP = "10px";
const HORIZONTAL_GAP = "20px";

const Header = styled.div`
  padding: ${VERTICAL_GAP} ${HORIZONTAL_GAP};
  border-bottom: 1px solid rgba(41, 43, 50, 0.1);
  position: relative;
`;

const Body = styled.div`
  padding: ${VERTICAL_GAP} ${HORIZONTAL_GAP};
`;

const Footer = styled.div`
  border-top: 1px solid rgba(41, 43, 50, 0.1);
  padding: ${VERTICAL_GAP} ${HORIZONTAL_GAP};
`;

const Title = styled.h1`
  margin: 12px 48px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: transparent;
  position: absolute;
  outline: 0;
  border: 0;
  right: ${HORIZONTAL_GAP};
  top: ${VERTICAL_GAP};
  color: gray;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.code !== "Escape") {
      return;
    }

    const { onClose } = this.props;

    onClose();
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { onClose, title, body, footer } = this.props;

    return (
      <Overlay>
        <Box onClick={(event) => event.stopPropagation()}>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>X</CloseButton>
          </Header>
          <Body>{body}</Body>
          <Footer>{footer}</Footer>
        </Box>
      </Overlay>
    );
  }
}

export default Modal;
