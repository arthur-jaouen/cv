import { FunctionComponent } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaRegEnvelope,
} from 'react-icons/fa';
import { En, T } from '../lib/i18n/translate';
import { Item } from '../lib/item';
import { LeftPanel, Panels, RightPanel } from '../lib/panels';
import { Section } from '../lib/section';

export const Contact: FunctionComponent = () => (
  <Section className="contact" icon={FaRegEnvelope} title={<T en="Contact" fr="Contact" />}>
    <Panels>
      <LeftPanel>
        <Item key="email" icon={FaEnvelope}>
          <a href="mailto:arthur.jaouen@gmail.com" target="_blank" rel="noreferrer">
            arthur.jaouen@gmail.com
          </a>
        </Item>
        <Item key="phone" icon={FaPhone}>
          <a href="tel:00353894461939" target="_blank" rel="noreferrer">
            (+353) 89 446 1939
          </a>
        </Item>
        <Item key="address" icon={FaMapMarker}>
          12 rue Saint Jean <br /> 50400 Granville
          <En>
            <br /> FRANCE
          </En>
        </Item>
      </LeftPanel>
      <RightPanel>
        <Item key="linkedin" icon={FaLinkedin}>
          <a
            className="noprint"
            href="https://linkedin.com/in/arthur-jaouen/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <span className="noscreen">https://linkedin.com/in/arthur-jaouen/</span>
        </Item>
        <Item key="github" icon={FaGithub}>
          <a
            className="noprint"
            href="https://github.com/arthur-jaouen"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <span className="noscreen">https://github.com/arthur-jaouen</span>
        </Item>
      </RightPanel>
    </Panels>
  </Section>
);
