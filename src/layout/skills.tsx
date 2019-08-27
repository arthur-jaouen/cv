import React from 'react';

import { Section } from 'src/components/section';
import { Skill } from 'src/components/skill';
import { SkillList } from 'src/components/skillList';

export class Skills extends React.Component<{}> {
    render() {
        return (
            <Section icon={{ name: 'star', type: 'solid' }} title={{ en: 'Skills', fr: 'Compétences' }}>
                <SkillList title={{ en: 'Development', fr: 'Développement' }}>
                    <Skill name={{ en: 'Android', fr: 'Android' }} rate={5} />
                    <Skill name={{ en: 'Javascript/Typescript', fr: 'Javascript/Typescript' }} rate={5} />
                    <Skill name={{ en: 'HTML', fr: 'HTML' }} rate={5} />
                    <Skill name={{ en: 'CSS', fr: 'CSS' }} rate={5} />
                    <Skill name={{ en: 'C#/.Net', fr: 'C#/.Net' }} rate={4} />
                    <Skill name={{ en: 'PHP', fr: 'PHP' }} rate={4} />
                </SkillList>
                <SkillList title={{ en: 'Languages', fr: 'Langues' }}>
                    <Skill name={{ en: 'French', fr: 'Français' }} rate={5} />
                    <Skill name={{ en: 'English', fr: 'Anglais' }} rate={4} />
                    <Skill name={{ en: 'Spanish', fr: 'Espagnol' }} rate={2} />
                    <Skill name={{ en: 'Italian', fr: 'Italien' }} rate={2} />
                </SkillList>
            </Section>
        );
    }
}
