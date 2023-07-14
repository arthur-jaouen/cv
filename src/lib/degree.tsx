import { Dayjs } from 'dayjs';
import { FunctionComponent, PropsWithChildren } from 'react';
import { Subsection } from './subsection';

import './degree.scss';

export type DegreeProps = PropsWithChildren<{
  start?: Dayjs;
  end: Dayjs;
}>;

export const Degree: FunctionComponent<DegreeProps> = ({ start, end, children }) => (
  <Subsection
    className="degree"
    title={(start ? start.format('YYYY') + ' - ' : '') + end.format('YYYY')}
  >
    {children}
  </Subsection>
);

export const DegreeTitle: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <h4 className="degree-title">{children}</h4>
);

export const DegreeDescription: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <p className="degree-description">{children}</p>
);
