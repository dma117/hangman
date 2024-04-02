export const buildBasicLayout = () => {
  if (!document.body.classList.contains('page')) {
    document.body.classList.add('page');
  }
  if (document.body.classList.contains('page--modal')) {
    document.body.classList.remove('page--modal');
  }
  document.body.innerHTML = "";

  const header = document.createElement('header');
  header.classList.add('header');
  const canvas = document.createElement('canvas');
  canvas.classList.add('hangman');
  canvas.id = 'canvas';
  canvas.width = 500;
  canvas.height = 581;
  canvas.innerText = `Извините, ваш браузер не поддерживает&lt;canvas&gt; элемент.`;

  const h1 = document.createElement('h1');
  h1.classList.add('heading-1');
  h1.innerText = 'Hangman game';
  
  header.append(canvas);
  header.append(h1);

  const main = document.createElement('main');
  main.classList.add('main');

  const secretWordDiv = document.createElement('div');
  secretWordDiv.classList.add('secret-word');
  main.append(secretWordDiv);

  const optionDiv1 = document.createElement('div');
  optionDiv1.classList.add('option');
  optionDiv1.id = 'hint';
  const p1 = document.createElement('p');
  p1.classList.add('option__text');
  const text1 = document.createTextNode("Hint: ");
  const spanElement1 = document.createElement("span");
  spanElement1.classList.add("option__text--bold");
  spanElement1.textContent = "A human powered vehicle with two wheels";
  p1.appendChild(text1);
  p1.appendChild(spanElement1);
  optionDiv1.append(p1);
  main.append(optionDiv1);

  const optionDiv2 = document.createElement('div');
  optionDiv2.classList.add('option');
  optionDiv2.id = 'incorrect-guesses';
  const p2 = document.createElement('p');
  p2.classList.add('option__text');
  const text2 = document.createTextNode("Incorrect answers: ");
  const spanElement2 = document.createElement("span");
  spanElement2.classList.add("option__text--bold", "option__text--red");
  spanElement2.textContent = "0 / 6";
  p2.appendChild(text2);
  p2.appendChild(spanElement2);
  optionDiv2.append(p2);
  main.append(optionDiv2);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  main.append(keyboard);

  document.body.append(header);
  document.body.append(main);
}