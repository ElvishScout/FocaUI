export interface Component<T extends HTMLElement = HTMLElement> {
  name: string;
  render: (
    elem: Element,
    callback?: (oldElem: HTMLElement, newElem: T) => void
  ) => T;
}
