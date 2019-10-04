import React from 'react';

import { MessageProps } from 'src/components/message';
import { Subsection } from 'src/components/subsection';

import './skillList.scss';

export type SkillListProps = {
    title: MessageProps;
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
