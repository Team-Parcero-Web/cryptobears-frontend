import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1440px) {
    max-width: 1280px;
  }

  @media (max-width: 1280px) {
    max-width: 976px;
  }

  @media (max-width: 976px) {
    max-width: 768px;
  }
`;

export const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 1280px) {
    max-width: 776px;
  }

  @media (max-width: 976px) {
    max-width: 668px;
  }
`;
export const Heading = styled.h1`
  font-family: "Oswald", sans-serif, "Oswald";
  font-size: ${({ xlarge }) => (xlarge ? "7rem" : "5rem")};
  letter-spacing: 2px;
  margin: 0;
  z-index: 2;
  font-weight: 500;
  line-height: 1.2;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 1.2;
  }
`;

export const Heading2 = styled(Heading)`
  font-size: 4rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Heading3 = styled(Heading)`
  font-size: 3rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Info = styled.p`
  font-size: ${({ size }) => (size ? `${size}rem` : "1.6rem")};
  text-align: center;
`;

export const BaseButton = styled.button`
  padding: 14px 10px;
  padding: ${({ loading }) => (loading ? "10px" : "14px 10px")};

  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  border: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.2s ease-out;
  border-radius: 3px;
  min-height:50px;
  cursor: pointer;

  &:hover {
    background-color: #051a76;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
    background-color: #051a76;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0px);
  }

  ${(props) =>
    props.disabled &&
    css`
      background: #c1c1c1;
      &:hover {
        background: #c1c1c1;
      }
    `}
  };

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const Button = ({ children, loading, ...rest }) => {
  return (
    <BaseButton {...rest} loading={loading}>
      {loading ? <Spinner /> : children}
    </BaseButton>
  );
};

export const BtnLink = styled.div`
  a {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    color: "black";
    text-transform: uppercase;
  }
`;

export const Card = styled.div`
  padding: 4rem;
  border-radius: 5px;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.15);

  @media (max-width: 976px) {
    padding: 2rem;
  }
`;

export const FormControl = styled.div`
  display: grid;
  margin-top: 1.6rem;
  grid-row-gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-size: ${({ size }) => (size ? `${size}rem` : "1.6rem")};
  font-weight: 500;
  display: block;
`;

const baseInputStyles = css`
  padding: 8px 12px;
  font-size: 20px;
  border-radius: 3px;
  border: 2px solid #ccc;
  width: 100%;
  transition: all 0.3s ease-out;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const Input = styled.input`
  ${baseInputStyles}
`;

export const TextArea = styled.textarea`
  ${baseInputStyles}
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: 3em;
  height: 3em;
  margin: 0px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5em solid rgba(255, 255, 255, 0.2);
  border-right: 0.5em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);
  border-left: 0.5em solid #ffffff;

  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 3em;
    height: 3em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

//Keyframes

export const floating = keyframes`
	0% {
		transform: translatey(20px) rotate(-10deg); ;
	}
	50% {
		transform: translatey(-60px) rotate(-10deg); ;
	}
	100% {
		transform: translatey(20px) rotate(-10deg); ;
	}
`;

export const floating2 = keyframes`
	0% {
		transform: translatey(10px) rotate(15deg); ;
	}
	50% {
		transform: translatey(-20px) rotate(15deg); ;
	}
	100% {
		transform: translatey(10px) rotate(15deg); ;
	}
`;
