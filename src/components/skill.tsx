import range from 'lodash/range';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

import { Icon } from 'src/components/icons/icon';
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
                    {range(0, rate).map(i => (
                        <Icon key={i} icon={FaStar} />
                    ))}
                    {range(rate, 5).map(i => (
                        <Icon key={i} icon={FaRegStar} />
                    ))}
                </p>
            </div>
        );
    }
}
