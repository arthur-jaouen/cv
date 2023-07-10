import React, { FunctionComponent } from 'react';
import { Language, useLanguage } from 'src/components/i18n/languageContext';

export type MessageStr = string | { [key in Language]: string };

export type MessageType =
    | React.ReactElement<unknown>
    | MessageStr
    | { [key in Language]: string | React.ReactElement<unknown> };

export type MessageProps = {
    msg: MessageType;
};

export function messageStr(msg: MessageStr, language: Language): string {
    return typeof msg === 'string' ? msg : msg[language];
}

export const Message: FunctionComponent<MessageProps> = ({ msg }) => {
    const language = useLanguage();

    return <>{typeof msg === 'string' || React.isValidElement(msg) ? msg : msg[language]}</>;
};
