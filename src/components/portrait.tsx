import React from 'react';
import { Message, MessageType } from 'src/components/i18n/message';
import './portrait.scss';



export type PortraitProps = {
    image: string;
    name: string;
    title: MessageType;
};

export class Portrait extends React.Component<PortraitProps> {
    render() {
        const { image, name, title } = this.props;

        return (
            <div className="portrait">
                <div className="portrait-image">
                    <img src={image} title={name} alt={name} width={386} height={407}/>
                </div>
                <h1 className="portrait-name">{name}</h1>
                <hr />
                <h2 className="portrait-title">
                    <Message msg={title} />
                </h2>
            </div>
        );
    }
}
