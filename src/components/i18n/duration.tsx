import { duration as momentDuration, Moment } from 'moment';
import React from 'react';

import { Message } from 'src/components/i18n/message';

export type DurationProps = {
    start: Moment;
    end: Moment;
};

export class Duration extends React.Component<DurationProps> {
    render() {
        const { start, end } = this.props;
        const diff = momentDuration(end.diff(start)).add(2, 'months');
        const years = diff.years();
        const months = diff.months() % 12;

        const yearsMsg = years ? (
            years > 1 ? (
                <Message
                    msg={{
                        en: `${years} years`,
                        fr: `${years} ans`
                    }}
                />
            ) : (
                <Message
                    msg={{
                        en: `${years} year`,
                        fr: `${years} an`
                    }}
                />
            )
        ) : null;

        const monthsMsg = months ? (
            months > 1 ? (
                <Message
                    msg={{
                        en: `${months} months`,
                        fr: `${months} mois`
                    }}
                />
            ) : (
                <Message
                    msg={{
                        en: `${months} month`,
                        fr: `${months} mois`
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
    }
}
