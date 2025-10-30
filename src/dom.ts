
/**
 * Creates a new element with the given tag name, attributes, and children.
 * 
 * @param tag - The tag name of the element to create.
 * @param attrs - The attributes of the element to create.
 * @param children - The children of the element to create.
 * @returns The created element.
 */
export function mkEl(
    tag: string,
    attrs: Record<string, string> = {},
    children: (string | HTMLElement)[] = []
): HTMLElement {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
    }
    for (const child of children) {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        } else {
            el.appendChild(child);
        }
    }
    return el;
}

/**
 * Appends a child element to the given parent element.
 * 
 * @param parent - The parent element to append the child element to.
 * @param child - The child element to append.
 */
export function apEl(parent: HTMLElement, child: HTMLElement): void {
    parent.appendChild(child);
}

/**
 * Adds an event listener to the given element.
 *
 * @param el - The element to add the event listener to.
 * @param event - The event to add the event listener to.
 * @param listener - The event listener to add.
 * @returns A function to remove the event listener.
 */
export function addEvent(
    el: HTMLElement,
    event: string,
    listener: (e: Event) => void
): () => void {
    el.addEventListener(event, listener);
    return () => {
        el.removeEventListener(event, listener);
    };
}
