import { GenIcon } from 'react-icons';

export const FlagSpain = GenIcon({
  tag: 'svg',
  attr: { viewBox: '0 0 512 512' },
  child: [
    {
      tag: 'circle',
      attr: {
        fill: '#C60B1E',
        cx: '256',
        cy: '256',
        r: '256',
      },
      child: [],
    },
    {
      tag: 'path',
      attr: {
        fill: '#FFC400',
        d: 'M490,150A256,256,0,0,0,22,150',
      },
      child: [],
    },
    {
      tag: 'path',
      attr: {
        fill: '#FFC400',
        d: 'M22,362A256,256,0,0,0,490,362',
      },
      child: [],
    },
  ],
});
