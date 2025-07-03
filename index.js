function selectElements() {
  const title = document.getElementById('main-title');
  console.log('By ID:', title.textContent);
  const paragraphs = document.getElementsByClassName('description');
  console.log('By class name:', paragraphs[0].textContent, '|', paragraphs[1].textContent);
  const divs = document.getElementsByTagName('div');
  console.log('By tag name:', divs[0].textContent);
  const firstPara = document.querySelector('.description');
  console.log('querySelector:', firstPara.textContent);
  const allParas = document.querySelectorAll('.description');
  allParas.forEach(p => console.log('querySelectorAll:', p.textContent));
}   
