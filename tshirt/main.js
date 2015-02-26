/* JS goes here */
"use strict";

var TShirt = (function() {
    /* build html string markup instead of DOM minipulation */
    function buildHTML() {
        var content = '<main class="main-content">\
                        <section class="item-detail"> \
                            <figure>\
                                <img id="tshirt" src="" alt="" width="300" height="300"/>\
                                <figcaption class="caption" id="caption"></figcaption>\
                            </figure>\
                        </section>\
                        <ul id="products" class="products-list"></ul>\
                       </main>';

        return content;
    }


    /* generate list items based on data */
    function generateItems() {
        var data = loadJSON();
        // concat string to avoid DOM minipulation, using data- attribute to store custom data
        var items = data.map(function(d) {  
            return '<li> <div class="thumb" id=' + d.id + ' data-prod-id=' + d.id + ' data-url=' + d.product_image_url + ' data-prod-title=' + d.title + ' ></div><div class="product">' + d.id + '</div></li>'
        });
        return items;
    }


    /* update item caption and image */
    function updateItem(img, caption, data) {
        img.src = data.url;
        img.alt = data.prodTitle;
        caption.innerHTML = '<h2>' + data.prodId + '. ' + data.prodTitle + '</h2>';
        hilightItem(data.prodId);
    }

    /* hilight a selected item */
    function hilightItem(id) {
        var activeItem =  document.getElementsByClassName('active')[0];
        if (activeItem !== undefined) {
            activeItem.classList.remove('active');
        }

        var item = document.getElementById(id);
        item.classList.add('active');
    }

    /* init events handler */
    function initEvents() {
        products.addEventListener('click', function(e) {    // event delegate (to parent container)
            if (e.target && e.target.nodeName == 'DIV') {
                
                // update item detail
                var dataset = e.target.dataset;
                updateItem(tshirt, caption, dataset);

                var newUrl = '?id=' + dataset.prodId;
                window.history.pushState(JSON.stringify(dataset), 'product-data', newUrl);
            }
        });

        window.onpopstate = function(event) {
            updateItem(tshirt, caption, JSON.parse(event.state));
        };
    }
    

    /* scroll to an item with animation */
    function animateScrollTo(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollLeft;
        var perTick = difference / 10;

        setTimeout(function() {
            element.scrollLeft = element.scrollLeft + perTick;
            animateScrollTo(element, to, duration - 2);
        }, 2);
    }

   
    /* load data from json */
    function loadJSON() {
        return [
              {
                "id": 1,
                "title": "Product-Title-1",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 2,
                "title": "Product-Title-2",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 3,
                "title": "Product-Title-3",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 4,
                "title": "Product-Title-4",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 5,
                "title": "Product-Title-5",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 6,
                "title": "Product-Title-6",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 7,
                "title": "Product-Title-7",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 8,
                "title": "Product-Title-8",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 9,
                "title": "Product-Title-9",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 10,
                "title": "Product-Title-10",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 11,
                "title": "Product-Title-11",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 12,
                "title": "Product-Title-12",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 13,
                "title": "Product-Title-13",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 14,
                "title": "Product-Title-14",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 15,
                "title": "Product-Title-15",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 16,
                "title": "Product-Title-16",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 17,
                "title": "Product-Title-17",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 18,
                "title": "Product-Title-18",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 19,
                "title": "Product-Title-19",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 20,
                "title": "Product-Title-20",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 21,
                "title": "Product-Title-21",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 22,
                "title": "Product-Title-22",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 23,
                "title": "Product-Title-23",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 24,
                "title": "Product-Title-24",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 25,
                "title": "Product-Title-25",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 26,
                "title": "Product-Title-26",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 27,
                "title": "Product-Title-27",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 28,
                "title": "Product-Title-28",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 29,
                "title": "Product-Title-29",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 30,
                "title": "Product-Title-30",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 31,
                "title": "Product-Title-31",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 32,
                "title": "Product-Title-32",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 33,
                "title": "Product-Title-33",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 34,
                "title": "Product-Title-34",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 35,
                "title": "Product-Title-35",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 36,
                "title": "Product-Title-36",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 37,
                "title": "Product-Title-37",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 38,
                "title": "Product-Title-38",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 39,
                "title": "Product-Title-39",
                "product_image_url": "/images/shirt.png"
              },
              {
                "id": 40,
                "title": "Product-Title-40",
                "product_image_url": "/images/shirt.png"
              }
            ]

    }   

    function init() {
        var container = document.getElementById('container');
        if (container !== null) {
            container.innerHTML = buildHTML();
            var products = document.getElementById('products'),
                tshirt = document.getElementById('tshirt'),
                caption = document.getElementById('caption');

            products.innerHTML = generateItems().join('');   // insert li into ul

            // init event liseners and delegation
            initEvents();

            // first load
            var currentState = history.state;
            var initialData = currentState === null? { prodId: data[0].id, prodTitle: data[0].title, url: data[0].product_image_url} : JSON.parse(currentState);
            updateItem(tshirt, caption, initialData);
            animateScrollTo(products, parseInt(initialData.prodId, 10) * 100 - 175, 300);   // scroll to position
        }
    }

    return {
        init: init
    }

})();


TShirt.init();




