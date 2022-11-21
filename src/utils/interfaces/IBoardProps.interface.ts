import ICard from "./ICard.interface";

export default interface IBoardProps {
  cards: ICard[];
  handleCallback(id: number): void;
}
