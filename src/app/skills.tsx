import { FunctionComponent } from 'react';
import { FaStar } from 'react-icons/fa';
import { T } from '../lib/i18n/translate';
import { Section } from '../lib/section';
import { Skill, SkillList } from '../lib/skill';

export const Skills: FunctionComponent = () => (
  <Section className="skills" icon={FaStar} title={<T en="Skills" fr="Compétences" />}>
    <SkillList title={<T en="Development" fr="Développement" />}>
      <Skill rate={5}>Android</Skill>
      <Skill rate={5}>JS/TS</Skill>
      <Skill rate={5}>HTML</Skill>
      <Skill rate={5}>CSS</Skill>
      <Skill rate={4}>C++</Skill>
      <Skill rate={4}>C#/.Net</Skill>
      <Skill rate={3}>Rust</Skill>
    </SkillList>
    <SkillList title={<T en="Devops" fr="Devops" />}>
      <Skill rate={5}>Linux</Skill>
      <Skill rate={4}>Azure DevOps</Skill>
    </SkillList>
    <SkillList title={<T en="Language" fr="Langues" />}>
      <Skill rate={5}>French</Skill>
      <Skill rate={5}>English</Skill>
      <Skill rate={2}>Spanish</Skill>
      <Skill rate={1}>Italian</Skill>
    </SkillList>
  </Section>
);
