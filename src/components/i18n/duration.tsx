import dayjs, { Dayjs } from 'dayjs';
import { FunctionComponent } from 'react';
import { Message } from 'src/components/i18n/message';

export type DurationProps = {
    start: Dayjs;
    end: Dayjs;
};

export const Duration: FunctionComponent<DurationProps> = ({ start, end }) => {
    const diff = dayjs.duration(end.diff(start)).add(2, 'months');
    const years = diff.years();
    const months = diff.months() % 12;

    const yearsMsg = years ? (
        years > 1 ? (
            <Message
                msg={{
                    en: `${years} years`,
                    fr: `${years} ans`,
                }}
            />
        ) : (
            <Message
                msg={{
                    en: `${years} year`,
                    fr: `${years} an`,
                }}
            />
        )
    ) : null;

    const monthsMsg = months ? (
        months > 1 ? (
            <Message
                msg={{
                    en: `${months} months`,
                    fr: `${months} mois`,
                }}
            />
        ) : (
            <Message
                msg={{
                    en: `${months} month`,
                    fr: `${months} mois`,
                }}
            />
        )
    ) : null;

    return (
        <>
            {yearsMsg}
            {yearsMsg && monthsMsg ? ' ' : ''}
            {monthsMsg}
        </>
    );
};
