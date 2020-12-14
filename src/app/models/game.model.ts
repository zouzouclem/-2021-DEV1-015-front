import {Board} from "./board.model";

export class Game {
  board: Board;
  players: any[];
  current: any;
  awinner: boolean;
  gameOver: boolean;
}
