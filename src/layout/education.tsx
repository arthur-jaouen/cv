import moment from 'moment';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

import { Degree } from 'src/components/degree';
import { Section } from 'src/components/section';

export class Education extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaGraduationCap} title={{ en: 'Education', fr: 'Formation' }}>
                <Degree
                    start={moment('2008', 'YYYY')}
                    end={moment('2011', 'YYYY')}
                    title={{
                        en: (
                            <>
                                Two-year degree in{' '}
                                <a href="http://www.iut-lannion.fr/presentation/dut-informatique">Computer Science</a>
                            </>
                        ),
                        fr: 'DUT Informatique'
                    }}
                    description={{
                        en: (
                            <>
                                At the{' '}
                                <a href="http://www.iut-lannion.fr/english">Lannion Institue of Technology (France)</a>{' '}
                                with an emphasis on software engineering
                            </>
                        ),
                        fr: "Délivré par l'IUT de Lannion, option génie logiciel"
                    }}
                />
                <Degree
                    end={moment('2008', 'YYYY')}
                    title={{ en: 'Science A-levels', fr: 'Baccalauréat S' }}
                    description={{
                        en: 'With an emphasis on mathematics and engineering sciences',
                        fr: "Mention assez bien, option sciences de l'ingénieur, spécialité mathématiques"
                    }}
                />
            </Section>
        );
    }
}
