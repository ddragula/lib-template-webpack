const Button = LibTemplateWebpack.Button;

const button = new Button({
    label: 'Click me',
    onClick: () => {
        alert('Button clicked!');
    }
});

button.add(document.getElementById('container'));
