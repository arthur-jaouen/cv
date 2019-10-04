import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib/cjs';

import './icon.scss';

export type IconProps = IconBaseProps & {
    icon: IconType;
};

export class Icon extends React.Component<IconProps> {
    render() {
        const { icon: IconComponent, ...props } = this.props;

        return (
            <span className="icon">
                <IconComponent {...props} />
            </span>
        );
    }
}
