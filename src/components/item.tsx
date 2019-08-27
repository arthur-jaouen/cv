import React from 'react';

import { Icon, IconProps } from 'src/components/icon';
import { Message, MessageProps } from 'src/components/message';

export type ItemProps = {
    icon: IconProps;
    text: MessageProps;
};

export class Item extends React.Component<ItemProps> {
    render() {
        const { icon, text } = this.props;

        return (
            <p className="item">
                <Icon {...icon} /> <Message {...text} />
            </p>
        );
    }
}
