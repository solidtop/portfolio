export class SkeletonCard {

    render() {
        const skeleton = document.createElement('div');
        skeleton.classList.add('skeleton-card');

        const image = document.createElement('div');
        image.classList.add('skeleton-card__image');
        skeleton.append(image);

        const title = document.createElement('div');
        title.classList.add('skeleton-card__title');
        skeleton.append(title);

        for (let i = 0; i < 4; i++) {
            const text = document.createElement('div');
            text.classList.add('skeleton-card__text');
            text.id = 'text' + (i + 1);
            skeleton.append(text);
        }

        const button = document.createElement('div');
        button.classList.add('skeleton-card__button');
        skeleton.append(button);

        return skeleton;
    }
}
