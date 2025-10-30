export default interface CardCfg {
    title: string;
    description: string;
    content: HTMLElement | (() => HTMLElement);
}
