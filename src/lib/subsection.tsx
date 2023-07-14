import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { FaSquare } from 'react-icons/fa';
import { Icon } from './icons/icon';

import './subsection.scss';

export type SubsectionProps = PropsWithChildren<{
  title: ReactNode;
  className?: string;
}>;

export const Subsection: FunctionComponent<SubsectionProps> = ({ title, className, children }) => (
  <div className={className ? `${className} subsection` : 'subsection'}>
    <p className="subsection-title">
      <Icon icon={FaSquare} color="#009a49" />
      {title}
    </p>
    <div className="subsection-content">{children}</div>
  </div>
);
