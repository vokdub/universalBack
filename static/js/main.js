let count = 3;
        function popo(){
            // 2. Создание переменной request
            var request = new XMLHttpRequest();
            // 3. Настройка запроса
            request.open('GET','http://127.0.0.1:8000/xx?count=' + count ,true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // var body = 'count=' + encodeURIComponent(count);
            // 4. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
            request.addEventListener('readystatechange', function() {
                // если состояния запроса 4 и статус запроса 200 (OK)
                if ((request.readyState==4) && (request.status==200)) {
                    // например, выведем объект XHR в консоль браузера
                    console.log(request);
                    // и ответ (текст), пришедший с сервера в окне alert
                    console.log(request.responseText);
                    // заменить содержимое элемента ответом, пришедшим с сервера
                    var ctxt = JSON.parse(request.responseText);
                    if (ctxt.houses.length > 0){
                        for (i in ctxt.houses) {
                            var li = document.createElement("LI");
                            li.innerHTML = `
                            <div class="carousel">
                            <div class="item`+(count/3)+`">
                            <img src="/static/jpg/0.jpg" alt="Alt" style="display: block;">
                            <img src="/static/jpg/1.jpg" alt="Alt" style="display: none;">
                            <img src="/static/jpg/2.jpg" alt="Alt" style="display: none;">
                            <img src="/static/jpg/3.jpg" alt="Alt" style="display: none;">
                            </div>
                            </div>
                            <p>Название: `+ctxt.houses[i].name+` <br> площадь : `+ctxt.houses[i].square+` кв.м. <br> `+ctxt.houses[i].description+`</p>`
                            li.id = ctxt.houses[i].name;
                            li.addEventListener('click', function () {goto (this);}, false);
                            document.getElementsByTagName('ol')[0].appendChild(li);
                        }
                        $(".item"+count/3).brazzersCarousel();
                        count+=3;
                    }
                }
            });
            // 5. Отправка запроса на сервер
            request.send();
        }
        function goto(elem) {
            document.location.href = 'catalog/'+elem.id;
        }