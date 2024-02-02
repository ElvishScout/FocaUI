import fapp from "./fapp";
import fbutton from "./fbutton";

let components: { [name: string]: { rendered: (elem: Element) => Element } } = {
  fapp,
  fbutton,
};

export default components;
