import {MenuItem} from './menu-item';

export class MenuItems {
  public items: MenuItem[] = [];

  constructor() {
    this.items.push(new MenuItem('favorite', () => {
      alert('favorite');
    }));
    this.items.push(new MenuItem('replay_10', () => {
      alert('replay_10');
    }));
    this.items.push(new MenuItem('queue', () => {
      alert('queue');
    }));
    this.items.push(new MenuItem('voicemail', () => {
      alert('voicemail');
    }));
    this.items.push(new MenuItem('favorite', () => {
      alert('sdfs');
    }));
    this.items.push(new MenuItem('textsms', () => {
      alert('textsms');
    }));
  }
}
