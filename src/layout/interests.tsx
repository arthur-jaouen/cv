import React from 'react';
import { FaBook, FaChess, FaCogs, FaRegHeart } from 'react-icons/fa';

import { Windsurf } from 'src/components/icons/windsurf';
import { Item } from 'src/components/item';
import { Section } from 'src/components/section';
import { TwoPanesLayout } from 'src/components/twoPanesLayout';

export class Interests extends React.Component<{}> {
    render() {
        return (
            <Section className="interests" icon={FaRegHeart} title={{ en: 'Interests', fr: "Centres d'intérêt" }}>
                <TwoPanesLayout
                    left={
                        <>
                            <Item icon={FaCogs} text={{ en: 'Personal projects', fr: 'Projets personnels' }} />
                            <Item icon={Windsurf} text={{ en: 'Windsurf', fr: 'Planche à voile' }} />
                        </>
                    }
                    right={
                        <>
                            <Item icon={FaChess} text={{ en: 'Chess', fr: "Jeu d'échecs" }} />
                            <Item icon={FaBook} text={{ en: 'Reading', fr: 'Lecture' }} />
                        </>
                    }
                />
            </Section>
        );
    }
}
