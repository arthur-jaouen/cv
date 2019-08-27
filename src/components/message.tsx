import React from 'react';

import { LanguageConsumer } from 'src/components/language/languageContext';

export type MessageProps = {
    fr: string;
    en: string;
};

export class Message extends React.Component<MessageProps> {
    render() {
        return <LanguageConsumer>{({ language }) => this.props[language]}</LanguageConsumer>;
    }
}
