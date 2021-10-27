export interface IWindowProps {
  /** window icon on top bar */
  icon: string;
  /** window title */
  name: string;
  /** window contianer, if not assigned, use window's element by default */
  container?: HTMLElement;
}
