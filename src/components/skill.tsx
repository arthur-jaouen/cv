import _ from 'lodash';
import React from 'react';

import { Message, MessageProps } from 'src/components/message';

import './skill.scss';

export type SkillProps = {
    name: MessageProps;
    rate: 0 | 1 | 2 | 3 | 4 | 5;
};

export class Skill extends React.Component<SkillProps> {
    render() {
        const { name, rate } = this.props;

        return (
            <div className="skill">
                <p className="skill-name">
                    <Message {...name} />
                </p>
                <p className="skill-rate">
                    {_.range(0, rate).map(i => (
                        <i key={i} className="fas fa-star" />
                    ))}
                    {_.range(rate, 5).map(i => (
                        <i key={i} className="far fa-star" />
                    ))}
                </p>
            </div>
        );
    }
}
