import { FunctionComponent } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { En, Fr, T } from '../lib/i18n/translate';
import { Section } from '../lib/section';

export const Profile: FunctionComponent = () => (
  <Section className="profile" icon={FaRegUser} title={<T en="Profile" fr="Profil" />}>
    <En>
      <p>28 years old - Driving licence - French</p>
      <p>
        <b>
          I am looking for a company that can provide a great team and Agile experience in a modern
          development workflow. I love code reviews, unit testing, automated builds and team
          happiness.
        </b>
      </p>
      <p>
        After a two-year degree in software engineering, I have acquired a solid work experience
        centered around the web, mastering diverse frontend and backend technologies. I like being a
        generalist, able to develop React web frontends or Android applications as well as .Net
        backends.
      </p>
      <p>
        Passionate about open-source software, I like to try leading-edge technologies such as Rust
        and apply the lessons learned to my everyday code.
      </p>
      <p>This CV is powered by React, Typescript and built by Webpack.</p>
      <p className="noprint">
        <a href="https://github.com/arthur-jaouen/cv" target="_blank" rel="noreferrer">
          View source on Github
        </a>
      </p>
      <p className="noscreen">View source on Github: https://github.com/arthur-jaouen/cv</p>
    </En>
    <Fr>
      <p>28 ans - Permis B</p>
      <p>
        <b>
          Je recherche une entreprise qui peut fournir une équipe motivée utilisant les
          méthodologies Agile et un workflow de développement moderne. J&apos;aime les code reviews,
          les tests unitaires, les builds automatisés et l&apos;esprit d&apos;équipe.
        </b>
      </p>
      <p>
        Après un DUT informatique, j&apos;ai acquis une solide expérience professionnelle centrée
        sur le web, maîtrisant des technologies diverses sur le frontend ou le backend. Je me
        considère comme un généraliste, capable de développer des frontends React ou des
        applications Android mais aussi des backends en .Net.
      </p>
      <p>
        Passioné par l&apos;open source, j&apos;aime tester des technologies modernes comme Rust et
        appliquer les leçons apprises au code que je produis.
      </p>
      <p>Ce CV a été créé avec React et Typescript et construit par Webpack.</p>
      <p className="noprint">
        <a href="https://github.com/arthur-jaouen/cv" target="_blank" rel="noreferrer">
          Voir le code source sur Github
        </a>
      </p>
      <p className="noscreen">
        Voir le code source sur Github : https://github.com/arthur-jaouen/cv
      </p>
    </Fr>
  </Section>
);
