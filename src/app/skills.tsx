import { FunctionComponent } from 'react';
import { FaStar } from 'react-icons/fa';
import { T } from '../lib/i18n/translate';
import { Section } from '../lib/section';
import { Skill, SkillList } from '../lib/skill';

export const Skills: FunctionComponent = () => (
  <Section className="skills" icon={FaStar} title={<T en="Skills" fr="Compétences" />}>
    <SkillList title={<T en="Frontend development" fr="Développement frontend" />}>
      <Skill rate={5}>Android</Skill>
      <Skill rate={5}>JS/TS</Skill>
      <Skill rate={5}>HTML</Skill>
      <Skill rate={5}>CSS</Skill>
    </SkillList>
    <SkillList title={<T en="Backend development" fr="Développement backend" />}>
      <Skill rate={4}>C#/.Net</Skill>
      <Skill rate={4}>PHP</Skill>
      <Skill rate={3}>Python</Skill>
    </SkillList>
    <SkillList title={<T en="Devops" fr="Devops" />}>
      <Skill rate={5}>Linux</Skill>
      <Skill rate={4}>Azure DevOps</Skill>
      <Skill rate={4}>Docker</Skill>
    </SkillList>
    <SkillList title={<T en="Language" fr="Langues" />}>
      <Skill rate={5}>French</Skill>
      <Skill rate={4}>English</Skill>
      <Skill rate={1}>Spanish</Skill>
      <Skill rate={1}>Italian</Skill>
    </SkillList>
  </Section>
);
