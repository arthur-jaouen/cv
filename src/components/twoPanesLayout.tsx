import { FunctionComponent } from 'react';

import './twoPanesLayout.scss';

export type TwoPanesLayoutProps = {
    left: React.ReactElement;
    right: React.ReactElement;
};

export const TwoPanesLayout: FunctionComponent<TwoPanesLayoutProps> = ({ left, right }) => (
    <div className="two-panes-layout">
        <div className="two-panes-layout-left">{left}</div>
        <div className="two-panes-layout-right">{right}</div>
    </div>
);
