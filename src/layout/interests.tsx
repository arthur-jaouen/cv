import React from 'react';
import { FaBook, FaChess, FaCogs, FaRegHeart } from 'react-icons/fa';

import { Windsurf } from 'src/components/icons/windsurf';
import { Item } from 'src/components/item';
import { Section } from 'src/components/section';

export class Interests extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaRegHeart} title={{ en: 'Interests', fr: "Centres d'intérêt" }}>
                <Item icon={FaCogs} text={{ en: 'Projets personnels', fr: 'Projets personnels' }} />
                <Item icon={Windsurf} text={{ en: 'Planche à voile', fr: 'Planche à voile' }} />
                <Item icon={FaChess} text={{ en: "Jeu d'échecs", fr: "Jeu d'échecs" }} />
                <Item icon={FaBook} text={{ en: 'Lecture', fr: 'Lecture' }} />
            </Section>
        );
    }
}
