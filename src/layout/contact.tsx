import React from 'react';
import { FaEnvelope, FaMapMarker, FaPhone, FaRegEnvelope } from 'react-icons/fa';

import { Item } from 'src/components/item';
import { Section } from 'src/components/section';

export class Contact extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaRegEnvelope} title={{ en: 'Contact', fr: 'Contact' }}>
                <Item icon={FaEnvelope} text={{ en: 'arthur.jaouen@gmail.com', fr: 'arthur.jaouen@gmail.com' }} />
                <Item icon={FaPhone} text={{ en: '06.03.34.04.44', fr: '06.03.34.04.44' }} />
                <Item
                    icon={FaMapMarker}
                    text={{
                        en: (
                            <>
                                12 rue Saint-Jean
                                <br />
                                50400 Granville
                            </>
                        ),
                        fr: (
                            <>
                                12 rue Saint-Jean
                                <br />
                                50400 Granville
                            </>
                        )
                    }}
                />
            </Section>
        );
    }
}
