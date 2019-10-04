import { GenIcon } from 'react-icons';

export const FlagIreland = GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
        {
            tag: 'circle',
            attr: {
                fill: '#F0F0F0',
                cx: '256',
                cy: '256',
                r: '256'
            },
            child: []
        },
        {
            tag: 'path',
            attr: {
                fill: '#FF9811',
                d: 'M512,256c0-110.07-69.472-203.906-166.957-240.076v480.155C442.528,459.906,512,366.072,512,256z'
            },
            child: []
        },
        {
            tag: 'path',
            attr: {
                fill: '#6DA544',
                d: 'M0,256c0,110.072,69.472,203.906,166.957,240.078V15.924C69.472,52.094,0,145.93,0,256z'
            },
            child: []
        }
    ]
});
