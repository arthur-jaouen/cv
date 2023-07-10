import { FunctionComponent } from 'react';
import { FaSquare } from 'react-icons/fa';
import { Message, MessageType } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';

import './subsection.scss';

export type SubsectionProps = {
    title: MessageType;
    children?: React.ReactNode;
};

export const Subsection: FunctionComponent<SubsectionProps> = ({ title, children }) => (
    <article>
        <p className="subsection-title">
            <Icon icon={FaSquare} color="#009a49" />
            <Message msg={title} />
        </p>
        <div className="subsection-content">{children}</div>
    </article>
);
