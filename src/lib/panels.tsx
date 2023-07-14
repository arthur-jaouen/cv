import { FunctionComponent, PropsWithChildren } from 'react';

import './panels.scss';

export const Panels: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="panels">{children}</div>
);

export const LeftPanel: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="panels-left">{children}</div>
);

export const RightPanel: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="panels-right">{children}</div>
);
