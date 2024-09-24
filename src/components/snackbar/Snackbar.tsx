import "./snackbar.scss";

// ** Types **
interface Props {
  text: string;
  isOpen: boolean;
}

const Snackbar = ({ text, isOpen }: Props) => {
  return isOpen ? <div className="snackbar">{text}</div> : null;
};

export default Snackbar;
