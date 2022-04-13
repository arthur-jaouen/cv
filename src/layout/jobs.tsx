import { FaSuitcase } from 'react-icons/fa';
import { Job } from 'src/components/job';
import React from 'react';
import { Section } from 'src/components/section';
import comerso from 'assets/img/comerso.png';
import dayjs from 'dayjs';

export class Jobs extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaSuitcase} title={{ en: 'Work experience', fr: 'Expériences professionnelles' }}>
                <Job
                    start={dayjs('2018-02')}
                    end={dayjs('2019-09')}
                    company={{
                        name: 'Comerso',
                        url: 'https://comerso.fr/en/homepage/',
                        logo: comerso,
                    }}
                    title={{
                        en: 'Full Stack Developer (React, Android, .Net)',
                        fr: 'Développeur fullstack (React, Android, .Net)',
                    }}
                    description={{
                        en: (
                            <>
                                <p>
                                    Comerso's goal is to help retail and industry adopt a zero-waste strategy with a
                                    strong technological approach. Comerso provides multiple solutions to handle the end
                                    of life of retail products :
                                </p>
                                <ul>
                                    <li>Logistics to donate products to non-profit organizations</li>
                                    <li>Tools to help donate, track due dates and edit discounts for products</li>
                                    <li>A portal to monitor and manage the end of life of products</li>
                                </ul>
                                <p>
                                    As a team of four developers we worked in a scrum environment, and built up a modern
                                    continuous integration workflow based on Azue DevOps. As a full stack developer, I
                                    worked on various applications :
                                </p>
                                <ul>
                                    <li>The REST API backend (C#, .Net, .Net Core)</li>
                                    <li>The internal administration frontend (React, Typescript)</li>
                                    <li>C-Stats customer portal (React, Typescript)</li>
                                    <li>Comerso android app, to track due dates and edit discounts for products</li>
                                    <li>
                                        GefMobile android app, to track logistics between retailers and non-profit
                                        endpoints
                                    </li>
                                </ul>
                            </>
                        ),
                        fr: (
                            <>
                                <p></p>
                            </>
                        ),
                    }}
                    languages={['Java', 'JS', 'C#', 'HTML/CSS']}
                    databases={['SQLServer', 'SQLite']}
                    frameworks={['Android', 'React', '.Net']}
                />
                <Job
                    start={dayjs('2016-01')}
                    end={dayjs('2016-03')}
                    company={{ name: 'Silamir', url: 'http://silamir.com/en', logo: require('assets/img/silamir.png') }}
                    title={{
                        en: 'Full Stack Developer (PHP, Angular, Cordova)',
                        fr: 'Développeur fullstack (PHP, Angular, Cordova)',
                    }}
                    description={{
                        en: (
                            <>
                                <p>
                                    Implementation of a mobile app to display a catalog of products for a large
                                    aeronautics industrial company :
                                </p>
                                <ul>
                                    <li>PHP REST API to manage and query the catalog</li>
                                    <li>Cordova mobile app (Android and iOS) to view the catalog</li>
                                </ul>
                            </>
                        ),
                        fr: (
                            <>
                                <p>Développement d'applications web et mobile</p>
                            </>
                        ),
                    }}
                    languages={['PHP', 'JS', 'HTML/CSS']}
                    databases={['MySQL', 'Solr']}
                    frameworks={['Bootstrap', 'Angular', 'Cordova']}
                />
                <Job
                    start={dayjs('2015-11')}
                    end={dayjs('2015-12')}
                    company={{
                        name: 'Consept',
                        url: 'https://www.consept.fr/',
                        logo: require('assets/img/consept.jpg'),
                    }}
                    title={{ en: 'Backend Developer (Ruby)', fr: 'Développeur backend (Ruby)' }}
                    description={{
                        en: (
                            <>
                                <p>Implementation of a REST API for the company ITG using Ruby on Rails :</p>
                                <ul>
                                    <li>User and client authentication</li>
                                    <li>Mapping of an existing SQL Server database</li>
                                    <li>Unit and functional testing</li>
                                </ul>
                            </>
                        ),
                        fr: (
                            <>
                                <p>
                                    Réalisation d'une API REST pour une société de portage salarial sur une base de
                                    données existante
                                </p>
                            </>
                        ),
                    }}
                    languages={['Ruby']}
                    databases={['SQLServer']}
                    frameworks={['Ruby on Rails']}
                />
                <Job
                    start={dayjs('2015-09')}
                    end={dayjs('2015-10')}
                    title={{
                        en: 'Full Stack Developer (PHP, Javascript)',
                        fr: 'Développeur fullstack (PHP, Javascript)',
                    }}
                    description={{
                        en: (
                            <>
                                <p>Implementation of a customer portal for the accounting company BDO :</p>
                                <ul>
                                    <li>Dashboard with KPIs for agents and customers</li>
                                    <li>Integration of an existing EDM</li>
                                    <li>Messaging interface between agents and customers</li>
                                    <li>Timeline with actions to perform for the customers</li>
                                </ul>
                            </>
                        ),
                        fr: (
                            <>
                                <p>
                                    Réalisation d'une plate-forme clients web responsive pour un grand groupe d'experts
                                    comptables
                                </p>
                            </>
                        ),
                    }}
                    languages={['PHP', 'JS', 'HTML/CSS']}
                    databases={['MySQL', 'Solr']}
                    frameworks={['Bootstrap', 'jQuery']}
                />
                <Job
                    start={dayjs('2011-04')}
                    end={dayjs('2015-05')}
                    company={{
                        name: 'FactorFX',
                        url: 'https://www.factorfx.com/',
                        logo: require('assets/img/factorfx.jpg'),
                    }}
                    title={{ en: 'Full Stack Developer', fr: 'Développeur fullstack' }}
                    description={{
                        en: (
                            <>
                                <p>Enterprise service around open source software :</p>
                                <ul>
                                    <li>Web and Android applications development</li>
                                    <li>
                                        Custom plugin development for open-source software (OpenERP, Alfresco, OCS
                                        Inventory, GLPI, Redmine)
                                    </li>
                                    <li>Reporting (Talend, Pentaho)</li>
                                    <li>Trainings (OCS Inventory, GLPI)</li>
                                    <li>Member of the OCS Inventory core team</li>
                                </ul>
                            </>
                        ),
                        fr: (
                            <>
                                <p>
                                    Service aux entreprises en open source : développements web et Android, plugins
                                    (OpenERP, Alfresco, OCS Inventory, GLPI, Redmine), solutions de reporting (Talend,
                                    Pentaho), formations
                                </p>
                            </>
                        ),
                    }}
                    languages={['PHP', 'Java', 'Ruby', 'Python', 'JS', 'HTML/CSS']}
                    databases={['MySQL', 'PostgreSQL', 'SQLServer']}
                    frameworks={['Symfony', 'Rails', 'Android']}
                />
            </Section>
        );
    }
}
