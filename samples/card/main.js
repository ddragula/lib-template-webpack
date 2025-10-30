const { Card, dom } = LibTemplateWebpack;

const card = new Card({
    title: 'Card Title',
    description: 'Card Description',
    content: dom.mkEl('p', {}, [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ])
});

card.add(document.getElementById('container'));
