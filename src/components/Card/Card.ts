import { getClassName } from '../../globals';
import { mkEl, apEl } from '../../dom';
import CardCfg from './CardCfg';

class Card {
    protected cfg: CardCfg;
    protected el?: HTMLElement;
    protected titleEl?: HTMLElement;
    protected descriptionEl?: HTMLElement;

    constructor(cfg: CardCfg) {
        this.cfg = cfg;
    }

    public add(parent: HTMLElement): void {
        this.titleEl = mkEl('h3', {}, [this.cfg.title]);

        this.descriptionEl = mkEl('p', {
            class: getClassName('cardDescription')
        }, [this.cfg.description]);

        const content = this.cfg.content;

        this.el = mkEl('div', {
            class: getClassName('card')
        }, [
            this.titleEl,
            this.descriptionEl,
            mkEl('div', {
                class: getClassName('divider')
            }),
            typeof content === 'function' ? content() : content
        ]);
        
        apEl(parent, this.el);
    }

    public destroy(): void {
        this.el?.remove();
    }
}


export default Card;
