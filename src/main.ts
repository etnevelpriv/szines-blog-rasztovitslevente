import './style.css';
import { Bejegyzes } from './Bejegyzes.ts';

const arr: Bejegyzes[] = [
  new Bejegyzes('TesztCím', ['tesztadaaaat', 'mostmar egy tombben'], '#2b00ff'),
  new Bejegyzes('Másik cím teszt', ['elso bekezdes', "masodik bekezdes", 'harmadik bekezdes'], '#ff0000'),
];

const init = function () {
  megjelenit();
};

const megjelenit = function () {
  // console.log(arr);
  const container = document.getElementById('bejegyzesekContainer') as HTMLElement;
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  };

  arr.forEach((bejegyzes: Bejegyzes) => {
    const articleElement = document.createElement('article') as HTMLElement;
    const titleElement = document.createElement('h2') as HTMLElement;

    articleElement.style.color = bejegyzes.color;
    titleElement.textContent = bejegyzes.title;

    container.appendChild(articleElement);
    articleElement.appendChild(titleElement);

    bejegyzes.contents.forEach(content => {
      const contentElement = document.createElement('p') as HTMLElement;
      contentElement.textContent = `${content}\n\n`;
      articleElement.appendChild(contentElement);
    });
  });
};

const ujBejegyzes = function (e: any) {
  e.preventDefault();
  const titleElement = document.getElementById('titleInput') as HTMLInputElement;
  const contentElement = document.getElementById('contentInput') as HTMLInputElement;
  const colorElement = document.getElementById('colorInput') as HTMLInputElement;

  const title = titleElement.value;
  const content = contentElement.value.split('\n\n');
  const color = colorElement.value;

  // console.log(color)
  console.log(content);

  arr.push(new Bejegyzes(title, content, color));
  megjelenit();

  const form = document.getElementById('blogLetrehozasForm') as HTMLFormElement;
  form.reset();
};

document.addEventListener('DOMContentLoaded', init);
document.getElementById('blogLetrehozasForm')?.addEventListener('submit', (e) => ujBejegyzes(e));