import { desktopBase, mobileBase } from "../lib/lib.styl";

export const defineNoun = (n, t) => {
  const c = [2, 0, 1, 1, 1, 2];
  return t[n % 100 > 4 && n % 100 < 20 ? 2 : c[n % 10 < 5 ? n % 10 : 5]];
};

const baseFontSize = {
  desktop: parseFloat(desktopBase),
  mobile: parseFloat(mobileBase),
};

export const getRem = (desktop, mobile = desktop) => ({
  desktop: parseFloat(desktop) / baseFontSize.desktop,
  mobile: parseFloat(mobile) / baseFontSize.mobile,
});

export const getPx = (desktop, mobile = desktop) => ({
  desktop: parseFloat(desktop) * baseFontSize.desktop,
  mobile: parseFloat(mobile) * baseFontSize.mobile,
});

export const createClassNames = (css = {}, name = "") => ({
  enter: css[`${name}Enter`],
  enterActive: css[`${name}EnterActive`],
  enterDone: css[`${name}EnterDone`],
  exit: css[`${name}Exit`],
  exitActive: css[`${name}ExitActive`],
  exitDone: css[`${name}ExitDone`],
});

export const getLS = (key) =>
  process.browser && window.localStorage.getItem(key);
