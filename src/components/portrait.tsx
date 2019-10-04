import React from 'react';

import { Message, MessageProps } from 'src/components/message';

import './portrait.scss';

export type PortraitProps = {
    imageUrl: string;
    name: string;
    title: MessageProps;
};

export class Portrait extends React.Component<PortraitProps> {
    render() {
        const { imageUrl: portraitUrl, name, title } = this.props;

        return (
            <div className="portrait">
                <div className="portrait-image">
                    <img src={portraitUrl} title={name} alt={name} />
                </div>
                <h1 className="portrait-name">{name}</h1>
                <hr />
                <h2 className="portrait-title">
                    <Message {...title} />
                </h2>
            </div>
        );
    }
}
