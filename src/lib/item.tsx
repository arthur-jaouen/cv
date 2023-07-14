import { FunctionComponent, PropsWithChildren } from 'react';
import { IconType } from 'react-icons';
import { Icon } from './icons/icon';

import './item.scss';

export type ItemProps = PropsWithChildren<{
  icon: IconType;
}>;

export const Item: FunctionComponent<ItemProps> = ({ icon, children }) => (
  <p className="item">
    <Icon icon={icon} />
    <span className="item-content">{children}</span>
  </p>
);
