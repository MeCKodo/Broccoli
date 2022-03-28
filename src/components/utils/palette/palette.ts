import PALETTE from './palette.json';

type PaletteNameType = typeof PALETTE;

function getColor<
  T extends keyof PaletteNameType,
  P extends keyof NonNullable<PaletteNameType[T]>,
>(paletteName: T, sub: P) {
  const paletteObj = PALETTE[paletteName];
  if (typeof paletteObj !== 'object' || !paletteObj?.[sub]) {
    throw new Error(`Unexpected typography name: ${paletteName}`);
  }
  return paletteObj?.[sub];
}

/**
 * get typography style from token
 *
 * @example
 * palette('text', 'natural')
 */
function palette<
  T extends keyof PaletteNameType,
  P extends keyof NonNullable<PaletteNameType[T]>,
>(
  typeName: T,
  sub: P,
) {
  return getColor(typeName, sub) || '';
}

export { palette };
