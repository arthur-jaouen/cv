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
                    <Header />
                    <Contact />
                    <Profile />
                    <Interests />
                </div>
                <div className="jobs-container">
                    <Jobs />
                </div>
                <div className="education-skills-container">
                    <Education />
                    <Skills />
                </div>
            </div>
        );
    }
}
