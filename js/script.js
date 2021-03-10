// ДОКУМЕНТАЦИЯ https://typeitjs.com/docs

new TypeIt("#typing", {
    // strings: ["Влад, кажется я сделал","В таком виде хотел?"],
    speed: 100,
    // loop:true,
    autoStart: false
})
    .pause(3000)
    .type("Привет!", {delay: 500})
    .delete()
    .type("Так и будешь молчать?", {delay: 500})
    .delete()
    .type("Ладно, расслабься, я всего лишь скрипт")
    .delete()
    .type("чебурк, я счит", {delay: 500})
    .move(-8, {delay: 300})
    .delete(4, {pause: 200})
    .type("ловек", {pause: 300})
    .move(8, {delay: 200})
    .type("аю, что в целом этоо успех")
    .move(-6)
    .delete(1)
    .move("END")
    .move("start", {speed: 20})
    .move(1)
    .delete(1)
    .type('Ч', {delay: 500})
    .move("END", {speed: 20})
    .break()
    .type("Есть предложения?")
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
        let arr = [
            {name:'Test', url:'/#test', pictures: 'https://kod.ru/content/images/2019/08/image-123.png', title:'Тут тестовое сообщение чтобы видеть что к чему!'},
        ]
        $('.wrapper').html(`<div class="content__body">
					        <div class="page__name">
					            <span>Мои проекты</span>
					        </div>
					        <div class="page__two">
					        </div>
					    </div>`)

        arr.forEach((a)=>{
            $('.wrapper div.page__two').append(`<div class="block__item">
							                <div class="item__img">
							                    <img src="${a.pictures}" alt="">
							                </div>
							                <div class="item__text">
							                    <p>${a.title}</p>
							                    <a target="_blank" href="${a.url}">${a.name}</a>
							                </div>
							                
							             </div>`)
        })

        // alert("Привет!")
    },
    //"Q".charCodeAt(0),
    //"W".charCodeAt(0)
    13, // enter
    17 // ctrl
);
 