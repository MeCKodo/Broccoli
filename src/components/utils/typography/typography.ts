import { css } from 'styled-components';
import style from './typography.json';

const TYPOGRAPHY_GALLERY = style.typography;

type TypographyStyleType = keyof typeof TYPOGRAPHY_GALLERY | 'inherit';
type TypographyStyleKey = keyof typeof TYPOGRAPHY_GALLERY['body1'];

function getTypography(name: TypographyStyleType, key: TypographyStyleKey) {
  if (name === 'inherit') {
    return undefined;
  }
  const fontStyleObj = TYPOGRAPHY_GALLERY[name];
  if (typeof fontStyleObj !== 'object' || !fontStyleObj[key]) {
    throw new Error(`Unexpected typography name: ${name}`);
  }
  return fontStyleObj[key];
}

/**
 * get typography style from token
 *
 * @example
 * typography('body1')
 */
function typography(
  name: TypographyStyleType,
  fontOnly = false,
) {
  const fontCss = css`
    font-size: ${getTypography(name, 'fontSize')};
    font-weight: ${getTypography(name, 'fontWeight')};
    font-family: ${style.fontFamily};
  `;
  return fontOnly
    ? fontCss
    : css`
        ${fontCss};
        line-height: ${getTypography(name, 'lineHeight')};
      `;
}

export { typography, TypographyStyleType };
