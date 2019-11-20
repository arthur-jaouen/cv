import React from 'react';

import './layout.scss';

import { Contact } from './contact';
import { Education } from './education';
import { Header } from './header';
import { Interests } from './interests';
import { Jobs } from './jobs';
import { Profile } from './profile';
import { Skills } from './skills';

export class Layout extends React.Component<{}> {
    render() {
        return (
            <div className="layout-container">
                <div className="profile-container">
                    <div className="sticky">
                        <Header />
                        <Contact />
                        <Profile />
                        <Interests />
                    </div>
                </div>
                <div className="jobs-container">
                    <div className="sticky">
                        <Jobs />
                    </div>
                </div>
                <div className="education-skills-container">
                    <div className="sticky">
                        <div className="education-container">
                            <Education />
                        </div>
                        <div className="skills-container">
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
