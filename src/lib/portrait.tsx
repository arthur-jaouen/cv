import { FunctionComponent, PropsWithChildren } from 'react';

import './portrait.scss';

export type PortraitProps = PropsWithChildren<{
  image: string;
  name: string;
}>;

export const Portrait: FunctionComponent<PortraitProps> = ({ image, name, children }) => (
  <div className="portrait">
    <img className="portrait-image" src={image} title={name} alt={name} />
    <h1 className="portrait-name">{name}</h1>
    <hr />
    <h2 className="portrait-title">{children}</h2>
  </div>
);
