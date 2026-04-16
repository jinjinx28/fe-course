import React from 'react';
import {Title, SubTitle} from '../commons/Titles.jsx';
import Categories from './Categories.jsx';
import Projects from './Projects.jsx';

export default function Work({data}) {
    return (
        <div>
            <section id="work" className="section container">
                <Title title = "My Work"/>
                <SubTitle subTitle = "Projects"/>
                <Categories categories={data?.categories}/>
                <Projects projects={data?.projects}/>

            <h2 className="title">My Work</h2>
            <p className="description">Projects</p>
            
        </section>
        </div>
    );
}

