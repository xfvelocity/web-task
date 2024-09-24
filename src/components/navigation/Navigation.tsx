import "./navigation.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { basketTotalAmount } from "../../stores/basket";

import Icon from "../icon/Icon";

const Navigation = () => {
  const total = useSelector(basketTotalAmount);

  return (
    <nav className="navigation">
      <div className="navigation-content max-width">
        <Link to="/">
          <img src="/icons/logo.png" />
        </Link>

        <Link to="/basket">
          <div className="navigation-item hover">
            <Icon src="basket" />

            <div className="navigation-item-badge">{total}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
