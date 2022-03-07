import LoaderStyled from "./styled/LoaderStyles";

interface LoaderInterface {
  id?: string;
}

const Loader = ({ id }: LoaderInterface) => {
  return <LoaderStyled id={id} />;
};
export default Loader;
