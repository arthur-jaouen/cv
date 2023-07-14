import { FunctionComponent } from 'react';
import { FaSuitcase } from 'react-icons/fa';
import { En, Fr, T } from '../lib/i18n/translate';
import { Job } from '../lib/job';
import { Section } from '../lib/section';

export const Jobs: FunctionComponent = () => (
  <Section icon={FaSuitcase} title={<T en="Work experience" fr="Expériences professionnelles" />}>
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
          en="Full Stack Developer (React, Android, .Net)"
          fr="Développeur fullstack (React, Android, .Net)"
        />
      }
      languages={['Java', 'JS', 'C#', 'HTML/CSS']}
      databases={['SQLServer', 'SQLite']}
      frameworks={['Android', 'React', '.Net']}
    >
      <En>
        <p>
          Comerso&apos;s goal is to help retail and industry adopt a zero-waste strategy with a
          strong technological approach. Comerso provides multiple solutions to handle the end of
          life of retail products :
        </p>
        <ul>
          <li>Logistics to donate products to non-profit organizations</li>
          <li>Tools to help donate, track due dates and edit discounts for products</li>
          <li>A portal to monitor and manage the end of life of products</li>
        </ul>
        <p>
          As a team of four developers we worked in a scrum environment, and built up a modern
          continuous integration workflow based on Azue DevOps. As a full stack developer, I worked
          on various applications :
        </p>
        <ul>
          <li>The REST API backend (C#, .Net, .Net Core)</li>
          <li>The internal administration frontend (React, Typescript)</li>
          <li>C-Stats customer portal (React, Typescript)</li>
          <li>Comerso android app, to track due dates and edit discounts for products</li>
          <li>
            GefMobile android app, to track logistics between retailers and non-profit endpoints
          </li>
        </ul>
      </En>
      <Fr>
        <p></p>
      </Fr>
    </Job>
    <Job
      start="2016-01"
      end="2016-03"
      company={{
        name: 'Silamir',
        url: 'http://silamir.com/en',
        logo: require('../img/silamir.png'),
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
      <En>
        <p>
          Implementation of a mobile app to display a catalog of products for a large aeronautics
          industrial company :
        </p>
        <ul>
          <li>PHP REST API to manage and query the catalog</li>
          <li>Cordova mobile app (Android and iOS) to view the catalog</li>
        </ul>
      </En>
      <Fr>
        <p>Développement d&apos;applications web et mobile</p>
      </Fr>
    </Job>
    <Job
      start="2015-11"
      end="2015-12"
      company={{
        name: 'Consept',
        url: 'https://www.consept.fr/',
        logo: require('../img/consept.jpg'),
      }}
      title={<T en="Backend Developer (Ruby)" fr="Développeur backend (Ruby)" />}
      languages={['Ruby']}
      databases={['SQLServer']}
      frameworks={['Ruby on Rails']}
    >
      <En>
        <p>Implementation of a REST API for the company ITG using Ruby on Rails :</p>
        <ul>
          <li>User and client authentication</li>
          <li>Mapping of an existing SQL Server database</li>
          <li>Unit and functional testing</li>
        </ul>
      </En>
      <Fr>
        <p>
          Réalisation d&apos;une API REST pour une société de portage salarial sur une base de
          données existante
        </p>
      </Fr>
    </Job>
    <Job
      start="2015-09"
      end="2015-10"
      title={
        <T
          en="Full Stack Developer (PHP, Javascript)"
          fr="Développeur fullstack (PHP, Javascript)"
        />
      }
      languages={['PHP', 'JS', 'HTML/CSS']}
      databases={['MySQL', 'Solr']}
      frameworks={['Bootstrap', 'jQuery']}
    >
      <En>
        <p>Implementation of a customer portal for the accounting company BDO :</p>
        <ul>
          <li>Dashboard with KPIs for agents and customers</li>
          <li>Integration of an existing EDM</li>
          <li>Messaging interface between agents and customers</li>
          <li>Timeline with actions to perform for the customers</li>
        </ul>
      </En>
      <Fr>
        <p>
          Réalisation d&apos;une plate-forme clients web responsive pour un grand groupe
          d&apos;experts comptables :
        </p>
      </Fr>
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
      frameworks={['Symfony', 'Rails', 'Android']}
    >
      <En>
        <p>Enterprise service around open source software :</p>
        <ul>
          <li>Web and Android applications development</li>
          <li>
            Custom plugin development for open-source software (OpenERP, Alfresco, OCS Inventory,
            GLPI, Redmine)
          </li>
          <li>Reporting (Talend, Pentaho)</li>
          <li>Trainings (OCS Inventory, GLPI)</li>
          <li>Member of the OCS Inventory core team</li>
        </ul>
      </En>
      <Fr>
        <p>
          Service aux entreprises en open source : développements web et Android, plugins (OpenERP,
          Alfresco, OCS Inventory, GLPI, Redmine), solutions de reporting (Talend, Pentaho),
          formations
        </p>
      </Fr>
    </Job>
  </Section>
);
