import { FunctionComponent } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Message, MessageType } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';

import './skill.scss';

function range(start: number, end: number): number[] {
    return Array.from({ length: end - start }, (_, i) => i + start);
}

export type SkillProps = {
    name: MessageType;
    subtitle?: MessageType;
    rate: 0 | 1 | 2 | 3 | 4 | 5;
};

export const Skill: FunctionComponent<SkillProps> = ({ name, rate }) => (
    <div className="skill">
        <p className="skill-name">
            <Message msg={name} />
        </p>
        <p className="skill-rate">
            {range(0, rate).map((i) => (
                <Icon key={i} icon={FaStar} />
            ))}
            {range(rate, 5).map((i) => (
                <Icon key={i} icon={FaRegStar} />
            ))}
        </p>
    </div>
);
