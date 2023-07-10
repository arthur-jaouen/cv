import dayjs from 'dayjs';
import { FunctionComponent } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Degree } from 'src/components/degree';
import { Section } from 'src/components/section';

export const Education: FunctionComponent = () => (
    <Section icon={FaGraduationCap} title={{ en: 'Education', fr: 'Formation' }}>
        <Degree
            start={dayjs('2008')}
            end={dayjs('2011')}
            title={{
                en: (
                    <>
                        Two-year degree in{' '}
                        <a
                            href="http://www.iut-lannion.fr/presentation/dut-informatique"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Computer Science
                        </a>
                    </>
                ),
                fr: 'DUT Informatique',
            }}
            description={{
                en: (
                    <>
                        At the{' '}
                        <a href="http://www.iut-lannion.fr/english" target="_blank" rel="noreferrer">
                            Lannion Institue of Technology (France)
                        </a>{' '}
                        with an emphasis on software engineering
                    </>
                ),
                fr: "Délivré par l'IUT de Lannion, option génie logiciel",
            }}
        />
        <Degree
            end={dayjs('2008')}
            title={{ en: 'Science A-levels', fr: 'Baccalauréat S' }}
            description={{
                en: 'With an emphasis on mathematics and engineering sciences',
                fr: "Mention assez bien, option sciences de l'ingénieur, spécialité mathématiques",
            }}
        />
    </Section>
);
