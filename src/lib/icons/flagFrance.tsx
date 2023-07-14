import { GenIcon } from 'react-icons';

export const FlagFrance = GenIcon({
  tag: 'svg',
  attr: { viewBox: '0 0 512 512' },
  child: [
    {
      tag: 'circle',
      attr: {
        fill: '#FFFFFF',
        cx: '256',
        cy: '256',
        r: '256',
      },
      child: [],
    },
    {
      tag: 'path',
      attr: {
        fill: '#0052B4',
        d: 'M150,22A256,256,0,0,0,150,490',
      },
      child: [],
    },
    {
      tag: 'path',
      attr: {
        fill: '#D80027',
        d: 'M362,490A256,256,0,0,0,362,22',
      },
      child: [],
    },
  ],
});
