import React from 'react';

import { Item } from 'src/components/item';
import { Section } from 'src/components/section';

export class Interests extends React.Component<{}> {
    render() {
        return (
            <Section icon={{ name: 'heart', type: 'regular' }} title={{ en: 'Interests', fr: "Centres d'intérêt" }}>
                <Item
                    icon={{ name: 'cogs', type: 'solid' }}
                    text={{ en: 'Projets personnels', fr: 'Projets personnels' }}
                />
                <Item
                    icon={{ name: require('public/img/windsurf.svg'), type: 'custom' }}
                    text={{ en: 'Planche à voile', fr: 'Planche à voile' }}
                />
                <Item icon={{ name: 'chess', type: 'solid' }} text={{ en: "Jeu d'échecs", fr: "Jeu d'échecs" }} />
                <Item icon={{ name: 'book', type: 'solid' }} text={{ en: 'Lecture', fr: 'Lecture' }} />
            </Section>
        );
    }
}
