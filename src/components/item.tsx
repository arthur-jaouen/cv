import React from 'react';
import { IconType } from 'react-icons';

import { Icon } from 'src/components/icons/icon';
import { Message, MessageProps } from 'src/components/message';

export type ItemProps = {
    icon: IconType;
    text: MessageProps;
};

export class Item extends React.Component<ItemProps> {
    render() {
        const { icon, text } = this.props;

        return (
            <p className="item">
                <Icon icon={icon} /> <Message {...text} />
            </p>
        );
    }
}
