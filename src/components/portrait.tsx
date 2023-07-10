import { FunctionComponent } from 'react';
import { Message, MessageType } from 'src/components/i18n/message';

import './portrait.scss';

export type PortraitProps = {
    image: string;
    name: string;
    title: MessageType;
};

export const Portrait: FunctionComponent<PortraitProps> = ({ image, name, title }) => (
    <div className="portrait">
        <img className="portrait-image" src={image} title={name} alt={name} />
        <h1 className="portrait-name">{name}</h1>
        <hr />
        <h2 className="portrait-title">
            <Message msg={title} />
        </h2>
    </div>
);
