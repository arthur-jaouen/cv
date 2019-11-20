import React from 'react';

import './twoPanesLayout.scss';

export type TwoPanesLayoutProps = {
    left: React.ReactElement;
    right: React.ReactElement;
};

export class TwoPanesLayout extends React.Component<TwoPanesLayoutProps> {
    render() {
        const { left, right } = this.props;

        return (
            <div className="two-panes-layout">
                <div className="two-panes-layout-left">{left}</div>
                <div className="two-panes-layout-right">{right}</div>
            </div>
        );
    }
}
