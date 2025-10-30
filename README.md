# lib-template-webpack

Template for creating small frontend libraries with two outputs:
- **CDN/UMD** bundle built by webpack (exposes a global `LibTemplateWebpack`)
- **ESM** output built by TypeScript (for consumers to bundle themselves)


## Install

```bash
npm install lib-template-webpack
```

Note: published on npm for testing purposes only.


## Development

Scripts defined in `package.json`:

```bash
# clean build outputs
npm run clean

# build ESM to ./lib
npm run build:lib

# build UMD to ./dist
npm run build:cdn

# full build (clean + lib + cdn)
npm run build
```

Webpack config for the CDN bundle is in `webpack/cdn.config.js`.


## Outputs

- **UMD (CDN):** `dist/lib-template-webpack.min.js` → global `LibTemplateWebpack`
- **ESM:** `lib/index.js` (types: `lib/index.d.ts`)


## Styling

Styles are provided in `styles/` and are not injected automatically. Include them yourself:

- In plain HTML (CDN):
```html
<link rel="stylesheet" href="./styles/lib-template-webpack.css" />
```

- In ESM (via bundler):
```ts
import 'lib-template-webpack/styles/lib-template-webpack.css';
```

The CSS uses the class prefix `ltw-` (see `prefix` in globals).

## Usage

### CDN (UMD)

```html
<link rel="stylesheet" href="./styles/lib-template-webpack.css" />
<div id="container"></div>

<script src="./dist/lib-template-webpack.min.js"></script>
<script>
  const { Button, Card, SampleCard, dom } = LibTemplateWebpack;

  const button = new Button({
    label: 'Click me',
    onClick: () => alert('Button clicked!')
  });
  button.add(document.getElementById('container'));

  const card = new Card({
    title: 'Card Title',
    description: 'Card Description',
    content: dom.mkEl('p', {}, ['Hello'])
  });
  card.add(document.getElementById('container'));

  const sc = new SampleCard();
  sc.add(document.getElementById('container'));
;</script>
```

See working examples in `samples/`.


### ESM

```ts
import { Button, Card, SampleCard, dom } from 'lib-template-webpack';
import 'lib-template-webpack/styles/lib-template-webpack.css';

const container = document.getElementById('container')!;

const btn = new Button({ label: 'Click', onClick: () => console.log('ok') });
btn.add(container);

const card = new Card({
  title: 'Title',
  description: 'Desc',
  content: dom.mkEl('p', {}, ['Content'])
});
card.add(container);

new SampleCard().add(container);
```


### License

MIT
