import { Color, Scene } from 'three';
import { IScene } from './types/scene';
import { GameController } from '../../controllers/game';

class MainScene extends Scene implements IScene {
  constructor(private readonly gc: GameController) {
    super();

    this.background = new Color('#D0D0D0');
    this.setupScene();
    this.setupRobots();
    this.setupTokens();

    gc.prepare();
  }

  private setupScene() {
    const board = this.gc.bc.objects[0];
    board.rotation.x = 270 * (Math.PI / 180);

    this.add(board);
  }

  private setupRobots() {
    this.add(...this.gc.rc.objects);
  }

  private setupTokens() {
    this.add(...this.gc.tc.objects);
  }

  update() {
    return;
  }
}

export {
  MainScene,
};