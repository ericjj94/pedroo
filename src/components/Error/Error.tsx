import { ButtonStyle } from "../../styled";

interface ErrorInterface {
  onButtonClick: Function;
}

const Error = ({ onButtonClick }: ErrorInterface) => {
  return (
    <div className="container">
      <div className="row">
        <p className="error">Unable to fetch data</p>
        <ButtonStyle
          onClick={() => {
            onButtonClick();
          }}
        >
          Click to go back
        </ButtonStyle>
      </div>
    </div>
  );
};
export default Error;
