import React from 'react';
import { FaRegUser } from 'react-icons/fa';

import { Section } from 'src/components/section';

export class Profile extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaRegUser} title={{ en: 'Profile', fr: 'Profil' }}>
                <p>26 ans - Permis B</p>
                <p>
                    Après des études en informatique à l'IUT de Lannion et 4 ans d'expérience dans le service aux
                    entreprises, je souhaite maintenant m'orienter vers des technologies modernes et prometteuses.
                    Passionné par l'open source, j'ai récemment exploré de nouveaux langages (Typescript, Elm, Rust,
                    Elixir) ainsi que des frameworks javascript plus établis (React, Angular 5, Vue)
                </p>
            </Section>
        );
    }
}
