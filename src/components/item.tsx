import React from 'react';
import { IconType } from 'react-icons';

import { Message, MessageType } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';

import './item.scss';

export type ItemProps = {
    icon: IconType;
    text: MessageType;
};

export class Item extends React.Component<ItemProps> {
    render() {
        const { icon, text } = this.props;

        return (
            <p className="item">
                <Icon icon={icon} />
                <span className="item-content">
                    <Message msg={text} />
                </span>
            </p>
        );
    }
}
