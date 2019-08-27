import React from 'react';

import './icon.scss';

export type IconProps = {
    type: 'solid' | 'regular' | 'brand' | 'custom';
    name: string;
};

export class Icon extends React.Component<IconProps> {
    render() {
        const { type, name } = this.props;

        if (type === 'custom') {
            return <img className="fa fa-fw custom-icon" src={name} />;
        } else {
            let suffix = type.substr(0, 1);

            return <i className={'fa' + suffix + ' fa-fw fa-' + name} />;
        }
    }
}
