const { SampleCard, dom } = LibTemplateWebpack;

const container = document.getElementById('container');

const card1 = new SampleCard();
const card2 = new SampleCard();

card1.add(container);
card2.add(container);
