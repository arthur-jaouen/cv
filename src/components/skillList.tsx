import './skillList.scss';

import { MessageType } from 'src/components/i18n/message';
import React from 'react';
import { Subsection } from 'src/components/subsection';

export type SkillListProps = {
    title: MessageType;
    children?: React.ReactNode;
};

export class SkillList extends React.Component<SkillListProps> {
    render() {
        const { title, children } = this.props;

        return (
            <div className="skill-list">
                <Subsection title={title}>{children}</Subsection>
            </div>
        );
    }
}
