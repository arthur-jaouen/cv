import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { useLanguage } from './context';
import { Language } from './language';

export type TProps = {
  [lang in Language]?: ReactNode;
};

export const T: FunctionComponent<TProps> = (translations) => <>{translations[useLanguage()]}</>;

export const En: FunctionComponent<PropsWithChildren> = ({ children }) =>
  useLanguage() == 'en' ? <>{children}</> : null;

export const Fr: FunctionComponent<PropsWithChildren> = ({ children }) =>
  useLanguage() == 'fr' ? <>{children}</> : null;

export const Es: FunctionComponent<PropsWithChildren> = ({ children }) =>
  useLanguage() == 'es' ? <>{children}</> : null;
