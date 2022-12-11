import ProjectList from "./js/projects.js";
import SkillList from "./js/skills.js";
import Timeline from "./js/timeline.js";
import Filter from "./js/filters.js";

document.querySelector('.button-open').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.add('open');   
});
document.querySelector('.button-close').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('open');   
});

const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.remove('open');   
    });
});


class APIAdapter {
    async loadData() {
        const res = await fetch('./static/data.json');
        const data = await res.json();
        return data;
    }
}

async function run() {
    const data = await new APIAdapter().loadData();

    const projectList = new ProjectList();
    projectList.render(data.projects);
    new Filter(data.projects).render(projectList);

    new SkillList(data.skills, data.additionalSkills).render();
    new Timeline(data.timeline).render();
}

run();


