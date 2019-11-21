import React from 'react';
import {
    FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaPhone, FaRegEnvelope
} from 'react-icons/fa';

import { Item } from 'src/components/item';
import { Section } from 'src/components/section';
import { TwoPanesLayout } from 'src/components/twoPanesLayout';

export class Contact extends React.Component<{}> {
    render() {
        return (
            <Section className="contact" icon={FaRegEnvelope} title={{ en: 'Contact', fr: 'Contact' }}>
                <TwoPanesLayout
                    left={
                        <>
                            <Item
                                icon={FaEnvelope}
                                text={
                                    <a href="mailto:arthur.jaouen@gmail.com" target="_blank">
                                        arthur.jaouen@gmail.com
                                    </a>
                                }
                            />
                            <Item
                                icon={FaPhone}
                                text={
                                    <a href="tel:00353894461939" target="_blank">
                                        (+353) 89 446 1939
                                    </a>
                                }
                            />
                            <Item
                                icon={FaMapMarker}
                                text={{
                                    en: (
                                        <>
                                            112 Richmond Road
                                            <br />
                                            Dublin 3
                                            <br />
                                            D03 XC85
                                        </>
                                    ),
                                    fr: (
                                        <>
                                            112 Richmond Road
                                            <br />
                                            Dublin 3
                                            <br />
                                            D03 XC85
                                            <br />
                                            IRELAND
                                        </>
                                    )
                                }}
                            />
                        </>
                    }
                    right={
                        <>
                            <Item
                                icon={FaLinkedin}
                                text={
                                    <a href="https://www.linkedin.com/in/arthur-jaouen/" target="_blank">
                                        Linkedin
                                    </a>
                                }
                            />
                            <Item
                                icon={FaGithub}
                                text={
                                    <a href="https://github.com/arthur-jaouen" target="_blank">
                                        Github
                                    </a>
                                }
                            />
                        </>
                    }
                />
            </Section>
        );
    }
}
