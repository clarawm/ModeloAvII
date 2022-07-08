import React from "react";
import { FcCustomerSupport } from "react-icons/fc";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <FcCustomerSupport />
          Help Desk
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/pedidos">Pedidos</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
