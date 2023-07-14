import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Icon } from './icons/icon';

import './section.scss';

export type SectionProps = PropsWithChildren<{
  title: ReactNode;
  icon: IconType;
  className?: string;
}>;

export const Section: FunctionComponent<SectionProps> = ({ title, icon, className, children }) => (
  <section className={className}>
    <h3 className="section-title">
      <Icon icon={icon} /> {title}
    </h3>
    {children}
  </section>
);
