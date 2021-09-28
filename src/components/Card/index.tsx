import { Button } from "../Button";
import { HeartFlag } from "../HeartFlag";
import {
  CardBody,
  CardDiscount,
  CardObservation,
  CardPrice,
  CardTitle,
  Wrapper,
} from "./style";

interface CardProps {
  title: string;
  price: number;
  discount: number;
  imgUrl: string;
  isFavorite: boolean;
  id: number;
  handleFavorite: (id: number) => void;
}

export const Card = ({
  title,
  price,
  discount,
  imgUrl,
  isFavorite,
  id,
  handleFavorite,
}: CardProps) => {
  const renderPriceFormatted = (price: number, value: number) => {
    if (value > 0) {
      return (price / value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else {
      return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
  };

  return (
    <CardBody>
      <HeartFlag
        isFavorite={isFavorite}
        id={id}
        handleFavorite={handleFavorite}
      />
      <Wrapper>
        <img src={imgUrl} alt="product img" />
        <CardTitle>{title}</CardTitle>
        <CardDiscount>{renderPriceFormatted(discount, 0)}</CardDiscount>
        <CardPrice>{renderPriceFormatted(price, 0)}</CardPrice>
        <CardObservation>
          Em até
          <strong>
            10x de {""}
            {renderPriceFormatted(price, 10)}
          </strong>
          sem juros
        </CardObservation>
        <Button />
      </Wrapper>
    </CardBody>
  );
};
