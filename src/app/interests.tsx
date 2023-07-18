import { FunctionComponent } from 'react';
import { FaBook, FaChess, FaCogs, FaRegHeart } from 'react-icons/fa';
import { T } from '../lib/i18n/translate';
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
          <T en="Personal projects" fr="Projets personnels" />
        </Item>
        <Item icon={Windsurf}>
          <T en="Windsurf" fr="Planche à voile" />
        </Item>
      </LeftPanel>
      <RightPanel>
        <Item icon={FaChess}>
          <T en="Chess" fr="Jeu d'échecs" />
        </Item>
        <Item icon={FaBook}>
          <T en="Reading" fr="Lecture" />
        </Item>
      </RightPanel>
    </Panels>
  </Section>
);
