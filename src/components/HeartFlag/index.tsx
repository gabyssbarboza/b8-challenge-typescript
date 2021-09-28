import { useState } from "react";
import { Content, HeartInactive, HeartActive } from "./styles";

interface FlagProps {
  isFavorite: boolean;
  id: number;
  handleFavorite: (id: number) => void;
}

export const HeartFlag = ({ isFavorite, id, handleFavorite }: FlagProps) => {
  return (
    <Content isFavorite={isFavorite} onClick={() => handleFavorite(id)}>
      {isFavorite ? <HeartActive /> : <HeartInactive />}
    </Content>
  );
};
