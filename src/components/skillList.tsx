import { FunctionComponent } from 'react';
import { MessageType } from 'src/components/i18n/message';
import { Subsection } from 'src/components/subsection';

import './skillList.scss';

export type SkillListProps = {
    title: MessageType;
    children?: React.ReactNode;
};

export const SkillList: FunctionComponent<SkillListProps> = ({ title, children }) => (
    <div className="skill-list">
        <Subsection title={title}>{children}</Subsection>
    </div>
);
