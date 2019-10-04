import React from 'react';

import { LanguageConsumer } from 'src/components/language/languageContext';

export type MessageProps = {
    fr: string | React.ReactNode;
    en: string | React.ReactNode;
};

export class Message extends React.Component<MessageProps> {
    render() {
        return <LanguageConsumer>{({ language }) => this.props[language]}</LanguageConsumer>;
    }
}
