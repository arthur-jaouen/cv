import React from 'react';

import { Icon, IconProps } from 'src/components/icon';
import { Message, MessageProps } from 'src/components/message';

import './section.scss';

export type SectionProps = {
    title: MessageProps;
    icon: IconProps;
};

export class Section extends React.Component<SectionProps> {
    render() {
        const { title, icon, children } = this.props;

        return (
            <div className="section">
                <h3 className="section-title">
                    <Icon {...icon} /> <Message {...title} />
                </h3>
                {children}
            </div>
        );
    }
}
