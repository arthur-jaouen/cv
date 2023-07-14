import { FunctionComponent } from 'react';
import { FaBook, FaChess, FaCogs, FaRegHeart } from 'react-icons/fa';
import { En, Fr, T } from '../lib/i18n/translate';
import { Windsurf } from '../lib/icons/windsurf';
import { Item } from '../lib/item';
import { LeftPanel, Panels, RightPanel } from '../lib/panels';
import { Section } from '../lib/section';

export const Interests: FunctionComponent = () => (
  <Section
    className="interests"
    icon={FaRegHeart}
    title={<T en="Interests" fr="Centres d'intérêt" />}
  >
    <Panels>
      <LeftPanel>
        <Item icon={FaCogs}>
          <En>Personal projects</En>
          <Fr>Projets personnels</Fr>
        </Item>
        <Item icon={Windsurf}>
          <En>Windsurf</En>
          <Fr>Planche à voile</Fr>
        </Item>
      </LeftPanel>
      <RightPanel>
        <Item icon={FaChess}>
          <En>Chess</En>
          <Fr>Jeu d&apos;échecs</Fr>
        </Item>
        <Item icon={FaBook}>
          <En>Reading</En>
          <Fr>Lecture</Fr>
        </Item>
      </RightPanel>
    </Panels>
  </Section>
);
