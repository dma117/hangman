const unsortedKeyValuePairs = {
  "KeyQ": "Q",
  "KeyW": "W",
  "KeyE": "E",
  "KeyR": "R",
  "KeyT": "T",
  "KeyY": "Y",
  "KeyU": "U",
  "KeyI": "I",
  "KeyO": "O",
  "KeyP": "P",
  "KeyA": "A",
  "KeyS": "S",
  "KeyD": "D",
  "KeyF": "F",
  "KeyG": "G",
  "KeyH": "H",
  "KeyJ": "J",
  "KeyK": "K",
  "KeyL": "L",
  "KeyZ": "Z",
  "KeyX": "X",
  "KeyC": "C",
  "KeyV": "V",
  "KeyB": "B",
  "KeyN": "N",
  "KeyM": "M",
};

const sortedKeyValueArr = Object.entries(unsortedKeyValuePairs).sort((a, b) => a[1].localeCompare(b[1]));
export const keys = Object.fromEntries(sortedKeyValueArr);