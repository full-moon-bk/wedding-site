export class MenuItem {
  public name: string;

  public action: () => void;
  constructor(name: string, action: () => void) {
    this.name = name;
    this.action = () => {
      action();
    };
  }
}
