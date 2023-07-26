import { FunctionComponent } from 'react';
import { FaSuitcase } from 'react-icons/fa';
import { T } from '../lib/i18n/translate';
import { Job } from '../lib/job';
import { Section } from '../lib/section';
import { ComersoEn } from './jobs/comerso.en';
import { ComersoFr } from './jobs/comerso.fr';
import { ConseptEn } from './jobs/consept.en';
import { ConseptFr } from './jobs/consept.fr';
import { FactorfxEn } from './jobs/factorfx.en';
import { FactorfxFr } from './jobs/factorfx.fr';
import { IesEn } from './jobs/ies.en';
import { IesFr } from './jobs/ies.fr';
import { SilamirEn } from './jobs/silamir.en';
import { SilamirFr } from './jobs/silamir.fr';

export const Jobs: FunctionComponent = () => (
  <Section icon={FaSuitcase} title={<T en="Work experience" fr="Expériences professionnelles" />}>
    <Job
      start="2019-12"
      end="2023-03"
      company={{
        name: 'IES Ltd.',
        url: 'https://iesve.com/',
        logo: require('../img/ies.jpg'),
      }}
      title={
        <T
          en="Senior Software Engineer (React, Ruby, C++)"
          fr="Ingénieur logiciel senior (React, Ruby, C++)"
        />
      }
      languages={['JS', 'Ruby', 'C++', 'C#', 'HTML/CSS']}
      databases={['PostgreSQL']}
      frameworks={['React', '.Net']}
    >
      <T en={<IesEn />} fr={<IesFr />} />
    </Job>
    <Job
      start="2018-02"
      end="2019-09"
      company={{
        name: 'Comerso',
        url: 'https://comerso.fr/en/homepage/',
        logo: require('../img/comerso.png'),
      }}
      title={
        <T
          en="Senior Software Engineer (React, Android, .Net)"
          fr="Ingénieur logiciel senior (React, Android, .Net)"
        />
      }
      languages={['Java', 'JS', 'C#', 'HTML/CSS']}
      databases={['SQLServer', 'SQLite']}
      frameworks={['Android', 'React', '.Net']}
    >
      <T en={<ComersoEn />} fr={<ComersoFr />} />
    </Job>
    <Job
      start="2016-01"
      end="2016-03"
      company={{
        name: 'Silamir',
        url: 'http://silamir.com/en',
        logo: require('../img/silamir.jpg'),
      }}
      title={
        <T
          en="Full Stack Developer (PHP, Angular, Cordova)"
          fr="Développeur fullstack (PHP, Angular, Cordova)"
        />
      }
      languages={['PHP', 'JS', 'HTML/CSS']}
      databases={['MySQL', 'Solr']}
      frameworks={['Bootstrap', 'Angular', 'Cordova']}
    >
      <T en={<SilamirEn />} fr={<SilamirFr />} />
    </Job>
    <Job
      start="2015-09"
      end="2015-12"
      company={{
        name: 'Consept',
        url: 'https://www.consept.fr/',
        logo: require('../img/consept.jpg'),
      }}
      title={
        <T
          en="Full Stack Developer (PHP, Ruby, Javascript)"
          fr="Développeur fullstack (PHP, Ruby, Javascript)"
        />
      }
      languages={['PHP', 'Ruby', 'JS', 'HTML/CSS']}
      databases={['SQLServer', 'MySQL']}
      frameworks={['Ruby on Rails', 'Bootstrap', 'jQuery']}
    >
      <T en={<ConseptEn />} fr={<ConseptFr />} />
    </Job>
    <Job
      start="2011-04"
      end="2015-05"
      company={{
        name: 'FactorFX',
        url: 'https://www.factorfx.com/',
        logo: require('../img/factorfx.jpg'),
      }}
      title={<T en="Full Stack Developer" fr="Développeur fullstack" />}
      languages={['PHP', 'Java', 'Ruby', 'Python', 'JS', 'HTML/CSS']}
      databases={['MySQL', 'PostgreSQL', 'SQLServer']}
      frameworks={['Rails', 'Android']}
    >
      <T en={<FactorfxEn />} fr={<FactorfxFr />} />
    </Job>
  </Section>
);
