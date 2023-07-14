import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Icon } from './icons/icon';
import { Subsection } from './subsection';

import './skill.scss';

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => i + start);
}

export type SkillProps = PropsWithChildren<{
  rate: 0 | 1 | 2 | 3 | 4 | 5;
}>;

export const Skill: FunctionComponent<SkillProps> = ({ rate, children }) => (
  <div className="skill">
    <p className="skill-name">{children}</p>
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

export type SkillListProps = PropsWithChildren<{
  title: ReactNode;
}>;

export const SkillList: FunctionComponent<SkillListProps> = ({ title, children }) => (
  <Subsection className="skill-list" title={title}>
    {children}
  </Subsection>
);
