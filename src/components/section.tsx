import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { Message, MessageType } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';

import './section.scss';

export type SectionProps = {
    title: MessageType;
    icon: IconType;
    className?: string;
    children?: React.ReactNode;
};

export const Section: FunctionComponent<SectionProps> = ({ title, icon, className, children }) => (
    <section className={className}>
        <h3 className="section-title">
            <Icon icon={icon} /> <Message msg={title} />
        </h3>
        {children}
    </section>
);
