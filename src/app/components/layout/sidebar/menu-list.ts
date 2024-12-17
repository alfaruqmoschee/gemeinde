export abstract class MenuItem {}

export class SpacerMenuItem extends MenuItem {}

export class RouterMenuItem extends MenuItem {
  constructor(
    public name: string,
    public route: string,
    public toolTip: string,
    public icon = ''
  ) {
    super();
  }
}

export const menuList = [
  new RouterMenuItem('Home', 'home', '....', 'home'),
  new RouterMenuItem('Kontact', 'contact', 'contact person', 'contact_page'),

  // new RouterMenuItem('System Architecture', 'system-architecture', '....', 'architecture'),
  new SpacerMenuItem(),
];
