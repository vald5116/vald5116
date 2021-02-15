// ДОКУМЕНТАЦИЯ https://typeitjs.com/docs

new TypeIt("#typing", {
   // strings: ["Влад, кажется я сделал","В таком виде хотел?"],
    speed: 100,
   // loop:true,
    autoStart: false
  })
  .pause(3000)
  .type("Так и будешь молчать?", {delay: 500})
  .delete()
  .type("Ладно, расслабься, я всего лишь скрипт")
  .delete()
  .type("валд, я счит", {delay: 500})
  .move(-9, {delay: 300})
  .delete(2, {pause: 200})
  .type("ла", {pause: 300})
  .move(9, {delay: 200})
  .type("аю, что в целом этоо успех")
  .move(-6)
  .delete(1)
  .move("END")  
  .move("start", {speed: 20})
  .move(1)
  .delete(1)
  .type('В', {delay: 500})
  .move("END", {speed: 20})
  .break()
  .type("Примерно это хотел?")
  .go()


 function runOnKeys(func) {
  var codes = [].slice.call(arguments, 1);
 
  var pressed = {};
 
  document.onkeydown = function(e) {
    e = e || window.event;
 
    pressed[e.keyCode] = true;
 
    for(var i=0; i<codes.length; i++) { // проверить, все ли клавиши нажаты
      if (!pressed[codes[i]]) {
        return;
      }
    }
 
    // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
    // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
    // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    pressed = {};
 
    func();
 
  };
 
  document.onkeyup = function(e) {
    e = e || window.event;
 
    delete pressed[e.keyCode];
  };
 
}

runOnKeys(
  function() { 
        $('.wrapper').html(`<div class="content__body">
        <div class="page__name">
            <span>Мои проекты</span>
        </div>
        <div class="page__two">
            <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
                
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
                
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
                
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             <div class="block__item">
                <div class="item__img">
                    <img src="https://klike.net/uploads/posts/2018-07/1531483091_1.jpg" alt="">
                </div>
                <div class="item__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad repellat maxime repellendus ducimus, quasi dignissimos hic voluptates rerum molestiae, a minus veniam, asperiores eligendi consectetur deleniti reiciendis cupiditate laborum!</p>
                    <a href="">Тут сайт</a>
                </div>
             </div>
             
        </div>
    </div>
        `
    )

    // alert("Привет!") 
    },
  //"Q".charCodeAt(0),
  //"W".charCodeAt(0)
  13, // enter
  17 // ctrl
);
 