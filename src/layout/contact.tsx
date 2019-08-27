import React from 'react';

import { Item } from 'src/components/item';
import { Section } from 'src/components/section';

export class Contact extends React.Component<{}> {
    render() {
        return (
            <Section icon={{ name: 'envelope', type: 'regular' }} title={{ en: 'Contact', fr: 'Contact' }}>
                <Item
                    icon={{ name: 'envelope', type: 'solid' }}
                    text={{ en: 'arthur.jaouen@gmail.com', fr: 'arthur.jaouen@gmail.com' }}
                />
                <Item icon={{ name: 'phone', type: 'solid' }} text={{ en: '06.03.34.04.44', fr: '06.03.34.04.44' }} />
                <Item
                    icon={{ name: 'map-marker', type: 'solid' }}
                    text={{ en: '12 rue Saint-Jean\n50400 Granville', fr: '12 rue Saint-Jean\n50400 Granville' }}
                />
            </Section>
        );
    }
}
