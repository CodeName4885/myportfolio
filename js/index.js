// 햄버거 메뉴 클릭 함수
const menu_btn = document.querySelector('.menu-btn');
const side_nav = document.querySelector('.side-nav');
const span = document.querySelectorAll('.head-nav .menu-btn-box .menu-btn span');

menu_btn.addEventListener('click',handlemenu);

function handlemenu(){
  span[0].classList.toggle('first-span');
  span[1].classList.toggle('second-span');
  span[2].classList.toggle('third-span');
  side_nav.classList.toggle('show-menu');
}
const mediaQueryList = window.matchMedia("(max-width: 1100px)");

mediaQueryList.addEventListener('change',handlemedia);

function handlemedia(e){
  if(e.matches){
    side_nav.classList.remove('show-menu');
  }
}
const projectDoc = document.querySelector('#project');
window.addEventListener('scroll', function(){
  const list = this.document.querySelectorAll(".side-nav ul a li");

  const posY = this.window.scrollY;
  const introduction = this.document.querySelector('#introduction').offsetTop;
  const experience = this.document.querySelector('#experience').offsetTop;
  const skill = this.document.querySelector('#skill').offsetTop - 100;
  const project = projectDoc.offsetTop;
  const projectHeignt = projectDoc.offsetHeight;
  const halfProject = project + projectHeignt / 2;
  const contact = this.document.querySelector('#contact').offsetTop;

  let totalHeignt = document.body.scrollHeight = this.window.innerHeight -1;

  if (posY >= introduction && posY < experience) {
    list.forEach((item, index) => {
      if (index === 0) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  } else if (posY >= experience && posY < skill) {
    list.forEach((item, index) => {
      if (index === 0) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  } else if (posY >= skill && posY < project) {
    list.forEach((item, index) => {
      if (index === 1) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }); 
  } else if (posY >= project && posY < contact) {
    list.forEach((item, index) => {
      if (index === 2) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  if (posY >= halfProject) {
    list.forEach((item, index) => {
      if (index === 3) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

});

window.onbeforeunload = function() {
  side_nav.classList.remove('show-menu');
  return "이 페이지를 떠나시겠습니까?";
};


