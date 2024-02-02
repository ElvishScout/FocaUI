type NumberLike = number | `${number}`;
type Percentage = `${number}%`;
type NumberWithUnit = `${number}${string}`;

type Direction =
  | "n"
  | "s"
  | "e"
  | "w"
  | "ns"
  | "sn"
  | "ne"
  | "en"
  | "nw"
  | "wn"
  | "se"
  | "es"
  | "sw"
  | "ws"
  | "ew"
  | "we"
  | "nse"
  | "nes"
  | "sne"
  | "sen"
  | "ens"
  | "esn"
  | "nsw"
  | "nws"
  | "snw"
  | "swn"
  | "wns"
  | "wsn"
  | "new"
  | "nwe"
  | "enw"
  | "ewn"
  | "wne"
  | "wen"
  | "sew"
  | "swe"
  | "esw"
  | "ews"
  | "wse"
  | "wes"
  | "nsew"
  | "nswe"
  | "nesw"
  | "news"
  | "nwse"
  | "nwes"
  | "snew"
  | "snwe"
  | "senw"
  | "sewn"
  | "swne"
  | "swen"
  | "ensw"
  | "enws"
  | "esnw"
  | "eswn"
  | "ewns"
  | "ewsn"
  | "wnse"
  | "wnes"
  | "wsne"
  | "wsen"
  | "wens"
  | "wesn";

interface LayoutOptions {
  width?: NumberLike | Percentage | NumberWithUnit;
  height?: NumberLike | Percentage | NumberWithUnit;
  x?: NumberLike | Percentage | NumberWithUnit;
  y?: NumberLike | Percentage | NumberWithUnit;
  z?: NumberLike;
  xAnchor?: NumberLike | Percentage | NumberWithUnit;
  yAnchor?: NumberLike | Percentage | NumberWithUnit;
  marginLeft?: NumberLike | Percentage | NumberWithUnit;
  marginRight?: NumberLike | Percentage | NumberWithUnit;
  marginTop?: NumberLike | Percentage | NumberWithUnit;
  marginBottom?: NumberLike | Percentage | NumberWithUnit;
  sticky?: Direction;
}

const defaultLayoutOptions: LayoutOptions = {
  width: -1,
  height: -1,
  x: 0,
  y: 0,
  z: 0,
  xAnchor: 0,
  yAnchor: 0,
  marginLeft: 3,
  marginRight: 3,
  marginTop: 3,
  marginBottom: 3,
  sticky: "nw",
};

class Layout {
  options: LayoutOptions;

  constructor(options: LayoutOptions) {
    this.options = { ...defaultLayoutOptions, ...options };
  }
}

export default { Layout };
