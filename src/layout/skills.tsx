import React from 'react';
import { FaStar } from 'react-icons/fa';

import { Section } from 'src/components/section';
import { Skill } from 'src/components/skill';
import { SkillList } from 'src/components/skillList';

export class Skills extends React.Component<{}> {
    render() {
        return (
            <Section icon={FaStar} title={{ en: 'Skills', fr: 'Compétences' }}>
                <SkillList title={{ en: 'Frontend development', fr: 'Développement frontend' }}>
                    <Skill name="Android" rate={5} />
                    <Skill name="JS/TS" rate={5} />
                    <Skill name="HTML" rate={5} />
                    <Skill name="CSS" rate={5} />
                </SkillList>
                <SkillList title={{ en: 'Backend development', fr: 'Développement backend' }}>
                    <Skill name="C#/.Net" rate={4} />
                    <Skill name="PHP" rate={4} />
                    <Skill name="Python" rate={3} />
                </SkillList>
                <SkillList title={{ en: 'Devops', fr: 'Devops' }}>
                    <Skill name="Linux" rate={5} />
                    <Skill name="Azure DevOps" rate={4} />
                    <Skill name="Docker" rate={4} />
                </SkillList>
                <SkillList title={{ en: 'Languages', fr: 'Langues' }}>
                    <Skill name="French" rate={5} />
                    <Skill name="English" rate={4} />
                    <Skill name="Spanish" rate={1} />
                    <Skill name="Italian" rate={1} />
                </SkillList>
            </Section>
        );
    }
}
