import { FunctionComponent } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Message } from 'src/components/i18n/message';
import { Section } from 'src/components/section';

export const Profile: FunctionComponent = () => (
    <Section className="profile" icon={FaRegUser} title={{ en: 'Profile', fr: 'Profil' }}>
        <Message
            msg={{
                en: (
                    <>
                        <p>28 years old - Driving licence - French</p>
                        <p>
                            <b>
                                Having recently moved to Dublin, I am now looking for a company that can provide a great
                                team and Agile experience in a modern development workflow. I love code reviews, unit
                                testing, automated builds and team happiness :)
                            </b>
                        </p>
                        <p>
                            After a two-year degree in software engineering, I have acquired a solid 6 years work
                            experience centered around the web, mastering diverse frontend and backend technologies. I
                            view myself as a generalist, being able to develop Android applications or React web
                            frontends as well as PHP, Ruby or .Net backends. Passionate about open-source software, I
                            like to try leading-edge technologies such as Rust or Elm and apply the lessons learned to
                            my everyday code.
                        </p>
                        <p>This CV is powered by React, Typescript, SCSS and built by Webpack.</p>
                        <p>
                            <a href="https://github.com/arthur-jaouen/cv" target="_blank" rel="noreferrer">
                                View source on Github
                            </a>
                        </p>
                    </>
                ),
                fr: (
                    <>
                        <p>28 ans - Permis B</p>
                        <p>
                            <b>
                                Having recently moved to Dublin, I am now looking for a company that can provide a great
                                team and Agile experience in a modern development workflow. I love code reviews, unit
                                testing, automated builds and team happiness :)
                            </b>
                        </p>
                        <p>
                            After a two-year degree in software engineering, I have acquired a solid 6 years work
                            experience centered around the web, mastering diverse frontend and backend technologies. I
                            view myself as a generalist, being able to develop Android applications or React web
                            frontends as well as PHP, Ruby or .Net backends. Passionate about open-source software, I
                            like to try leading-edge technologies such as Rust or Elm and apply the lessons learned to
                            my everyday code.
                        </p>
                        <p>This CV is powered by React, Typescript, SCSS and built by Webpack.</p>
                        <p>
                            <a href="https://github.com/arthur-jaouen/cv" target="_blank" rel="noreferrer">
                                View source on Github
                            </a>
                        </p>
                    </>
                ),
            }}
        />
    </Section>
);
