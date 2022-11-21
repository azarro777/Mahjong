export default interface IMahjongStateinterface {
  cards: ICards[];
  openedCards: ICards[];
}

interface ICards {
  id: number;
  topOfCard: string;
  bottomOfCard: number;
  isGame: boolean;
  isPlayable: boolean;
  isHeadsUp: boolean;
}
