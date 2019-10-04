import moment from 'moment';
import React from 'react';
import { FaSuitcase } from 'react-icons/fa';

import { Job } from 'src/components/job';
import { Section } from 'src/components/section';

export class Jobs extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaSuitcase} title={{ en: 'Work experience', fr: 'Expériences professionnelles' }}>
                <Job
                    start={moment('2018-02', 'YYYY-MM')}
                    end={moment('2019-09', 'YYYY-MM')}
                    company="Comerso"
                    title={{ en: 'Développeur fullstack', fr: 'Développeur fullstack' }}
                    description={{ en: '', fr: '' }}
                    languages={['Java', 'Javascript/Typescript', 'HTML', 'CSS', 'C#']}
                    databases={['SQL Server', 'SQLite']}
                    frameworks={['Android', 'React/Redux', 'SemanticUI', '.Net']}
                />
                <Job
                    start={moment('2016-01', 'YYYY-MM')}
                    end={moment('2016-03', 'YYYY-MM')}
                    company="Silamir SAS"
                    title={{ en: 'Développeur fullstack', fr: 'Développeur fullstack' }}
                    description={{
                        en: "Développement d'applications web et mobile",
                        fr: "Développement d'applications web et mobile"
                    }}
                    languages={['PHP', 'Javascript', 'HTML', 'CSS']}
                    databases={['MySQL', 'Solr']}
                    frameworks={['Bootstrap', 'jQuery', 'Angular', 'Cordova']}
                />
                <Job
                    start={moment('2015-11', 'YYYY-MM')}
                    end={moment('2015-12', 'YYYY-MM')}
                    company="Consept informatique"
                    title={{ en: 'Développeur backend', fr: 'Développeur backend' }}
                    description={{
                        en:
                            "Réalisation d'une API REST pour une société de portage salarial sur une base de données existante",
                        fr:
                            "Réalisation d'une API REST pour une société de portage salarial sur une base de données existante"
                    }}
                    languages={['Ruby']}
                    databases={['SQL Server']}
                    frameworks={['Ruby on Rails']}
                />
                <Job
                    start={moment('2015-09', 'YYYY-MM')}
                    end={moment('2015-10', 'YYYY-MM')}
                    company="Consept informatique"
                    title={{ en: 'Développeur fullstack', fr: 'Développeur fullstack' }}
                    description={{
                        en:
                            "Réalisation d'une plate-forme clients web responsive pour un grand groupe d'experts comptables",
                        fr:
                            "Réalisation d'une plate-forme clients web responsive pour un grand groupe d'experts comptables"
                    }}
                    languages={['PHP', 'Javascript', 'HTML', 'CSS']}
                    databases={['MySQL', 'Solr']}
                    frameworks={['Bootstrap', 'jQuery']}
                />
                <Job
                    start={moment('2015-09', 'YYYY-MM')}
                    end={moment('2015-10', 'YYYY-MM')}
                    company="FactorFX"
                    title={{ en: 'Développeur fullstack', fr: 'Développeur fullstack' }}
                    description={{
                        en:
                            'Service aux entreprises en open source : développements web et Android, plugins (OpenERP, Alfresco, OCS Inventory, GLPI, Redmine), solutions de reporting (Talend, Pentaho), formations',
                        fr:
                            'Service aux entreprises en open source : développements web et Android, plugins (OpenERP, Alfresco, OCS Inventory, GLPI, Redmine), solutions de reporting (Talend, Pentaho), formations'
                    }}
                    languages={['PHP', 'Java', 'Ruby', 'Python', 'HTML', 'CSS', 'Javascript']}
                    databases={['MySQL', 'PostgreSQL']}
                    frameworks={['Symfony', 'Rails', 'Android', 'jQuery', 'Bootstrap']}
                />
            </Section>
        );
    }
}
