export default class Timeline {
    constructor(timeline) {
        this.timeline = timeline;
    }

    render() {
        this.timeline.forEach(year => {
            const item = new Year(year).render();
            document.querySelector('.years').append(item);

            const marker = document.createElement('div');
            marker.classList.add('timeline__marker');
            document.querySelector('.timeline').append(marker);
        });
    }
}

class Year {
    constructor(year){
        this.year = year;
    }

    render() {
        const item = document.createElement('li');
        item.classList.add('year');

        const span = document.createElement('span');
        span.textContent = this.year.year;
        item.append(span);

        const p = document.createElement('p');
        p.textContent = this.year.description;
        item.append(p);

        return item;
    }
}