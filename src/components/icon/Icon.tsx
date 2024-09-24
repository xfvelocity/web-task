import { ReactSVG } from "react-svg";

// ** Types **
interface Props {
  src: string;
  onClick?: () => void;
}

const Icon = ({ src, onClick }: Props) => {
  return (
    <ReactSVG className="pp-icon" src={`/icons/${src}.svg`} onClick={onClick} />
  );
};

export default Icon;
