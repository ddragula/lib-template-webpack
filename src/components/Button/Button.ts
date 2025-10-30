import { getClassName } from '../../globals';
import { mkEl, apEl, addEvent } from '../../dom';
import ButtonCfg from './ButtonCfg';

class Button {
    private cfg: ButtonCfg;
    private el?: HTMLElement;
    private eventListenerDestroyers: (() => void)[] = [];

    constructor(cfg: ButtonCfg) {
        this.cfg = cfg;
    }

    private addEventListeners(): void {
        this.eventListenerDestroyers.push(
            addEvent(this.el, 'click', this.cfg.onClick)
        );
    }

    public add(parent: HTMLElement): void {
        this.el = mkEl('button', {
            type: 'button',
            class: getClassName('button')
        }, [this.cfg.label]);

        this.addEventListeners();
        
        apEl(parent, this.el);
    }

    public destroy(): void {
        for (const destroyer of this.eventListenerDestroyers) {
            destroyer();
        }
        this.eventListenerDestroyers = [];
        this.el.remove();
    }
}


export default Button;
