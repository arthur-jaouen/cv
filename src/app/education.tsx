import dayjs from 'dayjs';
import { FunctionComponent } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Degree, DegreeDescription, DegreeTitle } from '../lib/degree';
import { En, Fr, T } from '../lib/i18n/translate';
import { Section } from '../lib/section';

export const Education: FunctionComponent = () => (
  <Section className="education" icon={FaGraduationCap} title={<T en="Education" fr="Formation" />}>
    <Degree start={dayjs('2008')} end={dayjs('2011')}>
      <DegreeTitle>
        <En>
          Two-year degree in{' '}
          <a
            href="http://www.iut-lannion.fr/presentation/dut-informatique"
            target="_blank"
            rel="noreferrer"
          >
            Computer Science
          </a>
        </En>
        <Fr>DUT Informatique</Fr>
      </DegreeTitle>
      <DegreeDescription>
        <En>
          At the{' '}
          <a href="http://www.iut-lannion.fr/english" target="_blank" rel="noreferrer">
            Lannion Institue of Technology (France)
          </a>{' '}
          with an emphasis on software engineering
        </En>
        <Fr>
          Délivré par{' '}
          <a href="http://www.iut-lannion.fr/english" target="_blank" rel="noreferrer">
            l&apos;IUT de Lannion
          </a>
          , option génie logiciel
        </Fr>
      </DegreeDescription>
    </Degree>

    <Degree end={dayjs('2008')}>
      <DegreeTitle>
        <En>Science A-levels</En>
        <Fr>Baccalauréat S</Fr>
      </DegreeTitle>
      <DegreeDescription>
        <En>With an emphasis on mathematics and engineering sciences</En>
        <Fr>Mention assez bien, option sciences de l&apos;ingénieur, spécialité mathématiques</Fr>
      </DegreeDescription>
    </Degree>
  </Section>
);
