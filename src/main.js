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
        const res = await fetch('./static/projects.json');
        const data = await res.json();
        return data;
    }
}

class ProjectList {
    constructor(projects) {
        this.projects = projects;
    }

    render() {
        this.projects.forEach(project => {
            const card = new ProjectCard(project).render();
            document.querySelector('.project-list').append(card);
        });
    }
}

class ProjectCard {

    constructor(project) {
        this.project = project;
    }

    render() {
        const item = document.createElement('li');
        item.classList.add('project');

        const image = document.createElement('img');
        image.classList.add('project__image');
        image.src = this.project.image;
        image.alt = 'Image representation of project';
        item.append(image);

        const iconWrapper = document.createElement('div');
        iconWrapper.classList.add('icon-wrapper');
        item.append(iconWrapper);
        let icon;
        this.project.devices.forEach(device => {
            switch(device) {
                case 'mobile': icon = 'fa-solid fa-mobile'; break;
                case 'desktop': icon = 'fa-solid fa-desktop'; break;
                case 'android': icon = 'fa-brands fa-android'; break;
            }
            const i = document.createElement('i');
            i.setAttribute('class', icon + ' project__icon');
            i.title = 'Available on ' + device;
            iconWrapper.append(i);
        });
     
        const title = document.createElement('project__title');
        title.classList.add('project__title');
        title.textContent = this.project.title;
        item.append(title);

        const line = document.createElement('div');
        line.classList.add('line');
        item.append(line);

        const desc = document.createElement('p');
        desc.classList.add('project__description');
        desc.textContent = this.project.description;
        item.append(desc);

        const link = document.createElement('a');
        link.classList.add('button', 'primary');
        link.href = this.project.url;
        link.target = '_blank';
        link.textContent = 'Look it up';
        item.append(link);

        return item;
    }
}

class SkillList {
    constructor(skills) {
        this.skills = skills;
    }

    render() {

    }
}

class Skill {
    constructor(skill) {
        this.skill = skill;
    }

    render() {

    }
}

async function run() {
    const data = await new APIAdapter().loadData();

    new ProjectList(data.projects).render();
    //new SkillList(data.skills).render();
}

run();


