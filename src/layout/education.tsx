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
                    title={{ en: 'DUT Informatique', fr: 'DUT Informatique' }}
                    description={{
                        en: "Délivré par l'IUT de Lannion, option génie logiciel ",
                        fr: "Délivré par l'IUT de Lannion, option génie logiciel"
                    }}
                />
                <Degree
                    end={moment('2008', 'YYYY')}
                    title={{ en: 'Baccalauréat S', fr: 'Baccalauréat S' }}
                    description={{
                        en: "Mention assez bien, option sciences de l'ingénieur, spécialité mathématiques",
                        fr: "Mention assez bien, option sciences de l'ingénieur, spécialité mathématiques"
                    }}
                />
            </Section>
        );
    }
}
