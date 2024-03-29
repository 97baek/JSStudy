interface Conatiner {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

abstract class Shape {
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  public readonly name: string = 'Shape';
  protected _borderWidth: number;
  private action!: string;

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  abstract area: () => number;

  set borderWidth(width: number) {
    if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error('borderWidth 허용 범위를 벗어났습니다.');
    }
  }

  get borderWidth(): number {
    return this._borderWidth;
  }
}
