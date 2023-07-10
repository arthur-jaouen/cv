import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib/cjs';

import './icon.scss';

export type IconProps = IconBaseProps & {
    icon: IconType;
};

export const Icon: FunctionComponent<IconProps> = ({ icon: IconComponent, ...props }) => {
    return (
        <span className="icon">
            <IconComponent {...props} />
        </span>
    );
};
