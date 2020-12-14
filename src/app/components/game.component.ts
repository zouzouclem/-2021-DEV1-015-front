import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GameService} from "../services/game.service";
import {Game} from "../models/game.model";

@Component({
  selector: 'app-game',
  template: `
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4">
                <h2>Tic Tac Toe</h2>
            </div>
        </div>
        <div class="row justify-content-center">
        <div class="col-3">
            <h4 *ngIf="!game?.gameOver && !game?.awinner">{{game?.current?.pawn}} to play</h4>
        </div>
        </div>
   
      <div class="container" [ngClass]="{'disabledDiv': game?.awinner || game?.gameOver}">
          <div class="row p-0" *ngFor="let line of game?.board?.cells; let i= index">
              <div class="col p-0 btn-group" *ngFor="let column of game?.board?.cells[i] ">
                  <button type="button" class="btn btn-outline-success height-100" (click)="play(column)" >
                      {{column.value != "EMPTY"? column.value : " "}}
                  </button>
              </div>
          </div>
      </div>
    <div class="row justify-content-center">
        <div class="col-3">
    <div *ngIf="game?.awinner">{{game?.current?.pawn}} WINS !!!</div>
    <div *ngIf="game?.gameOver">Draw !!!</div>
        </div>
    </div>

    <div class="row justify-content-center mt-4">
        <div class="col-3">

        <button type="button" class="btn btn-success" (click)="newGame()">new game</button>
        </div>
    </div>
    </div>
  `,
  styles: ['.height-100{ height: 100px !important;}',
             '.disabledDiv{ pointer-events: none; opacity: 0.4;}'],
})
export class GameComponent implements OnInit{

  public game: Game;

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    this.gameService.newGame().subscribe(response => {
      this.game = response ;
    });
  }

  newGame(){
    this.ngOnInit();
  }

  play(column){
    this.gameService.play(column).subscribe(response => {
      this.game = response;
    });
  }

}
