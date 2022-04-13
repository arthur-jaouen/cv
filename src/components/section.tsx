import './section.scss';

import { Message, MessageType } from 'src/components/i18n/message';

import { Icon } from 'src/components/icons/icon';
import { IconType } from 'react-icons';
import React from 'react';

export type SectionProps = {
    title: MessageType;
    icon: IconType;
    className?: string;
    children?: React.ReactNode;
};

export class Section extends React.Component<SectionProps> {
    render() {
        const { title, icon, className, children } = this.props;

        return (
            <section className={className}>
                <h3 className="section-title">
                    <Icon icon={icon} /> <Message msg={title} />
                </h3>
                {children}
            </section>
        );
    }
}
