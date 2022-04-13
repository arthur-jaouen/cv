import { LanguageConsumer, Languages } from 'src/components/i18n/languageContext';

import React from 'react';

export type MessageType = React.ReactElement | string | { [key in Languages]: React.ReactElement | string };

export type MessageProps = {
    msg: MessageType;
};

export class Message extends React.Component<MessageProps> {
    render() {
        const msg = this.props.msg;

        if (typeof msg === 'string' || React.isValidElement(msg)) {
            return msg;
        } else {
            return <LanguageConsumer>{({ language }) => msg[language]}</LanguageConsumer>;
        }
    }
}
