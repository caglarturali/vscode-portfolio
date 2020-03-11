/**
 * StatusBar component styles.
 */
import { bgDarkBlue, bgMidBlue, textLightBlue, sSize } from '../../theme';

export default () => ({
  root: {
    bottom: '0',
    background: bgDarkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Ubuntu', Helvetica, sans-serif",
    fontWeight: '400',
    left: '0',
    position: 'fixed',
    width: '100vw',
    '& span, & a': {
      display: 'inline-block',
      padding: '2px 8px',
      '&:hover': {
        background: bgMidBlue,
        cursor: 'pointer',
      },
    },
  },
  icon: {
    color: textLightBlue,
  },
  text: {
    color: textLightBlue,
    fontSize: sSize,
    padding: '0 4px',
  },
});