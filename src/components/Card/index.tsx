import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h4>
            <>
              {dados.nome} - {dados.data}
            </>
          </h4>
          <h3>Problema: {dados.problema}</h3>
          <h3>Descrição: {dados.descricao}</h3>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
