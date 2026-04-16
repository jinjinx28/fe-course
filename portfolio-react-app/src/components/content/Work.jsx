import React from 'react';
import {Title, SubTitle} from '../commons/Title.jsx';
import Categories from './Categories.jsx';
import Projects from './Projects.jsx';

export default function Work() {
    return (
        <div>
            <section id="work" class="section container">
                <Title title = "My Work"/>
                <SubTitle subTitle = "Projects"/>
                <Categories />
                <Projects />

            <h2 class="title">My Work</h2>
            <p class="description">Projects</p>
            
        </section>
        </div>
    );
}

