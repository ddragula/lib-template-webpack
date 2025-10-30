import { mkEl } from '../../dom';
import Button from '../Button/Button';
import Card from '../Card/Card';

class SampleCard extends Card {
    private addBtn: Button;
    private subtractBtn: Button;
    private counterEl: HTMLElement;

    constructor() {
        super({
            title: 'Sample Card',
            description: 'This is a sample card',
            content: () => this.renderContent()
        });
    }

    private renderContent(): HTMLElement {

        this.addBtn = new Button({
            label: '+ Add',
            onClick: () => {
                this.counterEl.textContent = (Number(this.counterEl.textContent) + 1).toString();
            }
        });

        this.subtractBtn = new Button({
            label: '- Subtract',
            onClick: () => {
                this.counterEl.textContent = (Number(this.counterEl.textContent) - 1).toString();
            }
        });

        this.counterEl = mkEl('span', {}, ['0']);

        const content = mkEl('div', {
            style: 'font-size: 2rem; font-weight: bold;'
        }, [
            'Counter: ',
            this.counterEl
        ]);

        this.subtractBtn.add(content);
        this.addBtn.add(content);

        return mkEl('p', {}, [content]);
    }
}

export default SampleCard;
