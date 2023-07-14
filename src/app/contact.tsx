import { FunctionComponent } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaRegEnvelope,
} from 'react-icons/fa';
import { Fr, T } from '../lib/i18n/translate';
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
          112 Richmond Road <br /> Dublin 3 <br /> D03 XC85
          <Fr>
            <br /> IRELAND
          </Fr>
        </Item>
      </LeftPanel>
      <RightPanel>
        <Item key="linkedin" icon={FaLinkedin}>
          <a href="https://www.linkedin.com/in/arthur-jaouen/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </Item>
        <Item key="github" icon={FaGithub}>
          <a href="https://github.com/arthur-jaouen" target="_blank" rel="noreferrer">
            Github
          </a>
        </Item>
      </RightPanel>
    </Panels>
  </Section>
);
