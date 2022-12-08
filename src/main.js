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
        return data.projects;
    }
}

class ProjectList {
    async render() {
        const api = new APIAdapter();
        const projects = await api.loadData();

        projects.forEach(project => {
            const card = new ProjectCard(project).render();
            document.querySelector('.project-list').append(card);
        });
    }
}

class ProjectCard {

    constructor(data) {
        this.data = data;
    }

    render() {
        const item = document.createElement('li');
        item.classList.add('project');

        const image = document.createElement('img');
        image.classList.add('project__image');
        image.src = this.data.image;
        image.alt = 'Image representation of project';
        item.append(image);

        const title = document.createElement('project__title');
        title.classList.add('project__title');
        title.textContent = this.data.title;
        item.append(title);

        const line = document.createElement('div');
        line.classList.add('line');
        item.append(line);

        const desc = document.createElement('p');
        desc.classList.add('project__description');
        desc.textContent = this.data.description;
        item.append(desc);

        const link = document.createElement('a');
        link.classList.add('button', 'primary');
        link.href = this.data.url;
        link.target = '_blank';
        link.textContent = 'Look it up';
        item.append(link);

        return item;
    }
}

new ProjectList().render();
