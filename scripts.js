// DOM do node
var p2NodeList = document.querySelectorAll('p2');
var serchbar = document.querySelector('.guestSerchBar');

// node do array
var p2List = Array.from(p2NodeList);


// array of objects
let arrayObject = []
for (let i = 0; i < p2List.length; i++) {
    arrayObject[i] = {
        "nazwisko": p2List[i].outerText,
        "id": "seat" + [(i + 1)],
        "number": (i + 1)
    }
}


// sortowanie alfabetyczne
function compare(a, b) {
    if (a.nazwisko < b.nazwisko) {
        return -1;
    }
    if (a.nazwisko > b.nazwisko) {
        return 1;
    }
    return 0;
}
arrayObject.sort(compare);
// console.log("arrayObject",arrayObject)


// renderowanie listy
for (let i = 0; i < arrayObject.length; i++) {
    serchbar.innerHTML +=
        "<input type=\"checkbox\" onclick=\"addAtributeSeat(" +
        arrayObject[i].number +
        ")\" id=\"" +
        arrayObject[i].id +
        "\"/>" +
        arrayObject[i].nazwisko +
        "<br />"
}

// podswietlanie osoby z listy
function addAtributeSeat(numb) {
    let seat = document.querySelector('.seatHTML' + numb)
    seat.classList.toggle('checkOn');
}

//dodawanie underline do sekcji w ktorej jestesmy

function underlineMenuItem() {
    var sections = document.querySelectorAll(".sectionContainer");
    var menuitems = document.querySelectorAll(".menu-item");
    var menuheight = document.querySelector('.menu').offsetHeight;
    for (var i = 0; i < sections.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = sections[i].getBoundingClientRect().top;
        if (elementTop + windowHeight - menuheight < windowHeight) {
            menuitems[i].classList.add("active");
            if (i > 0) {
                menuitems[i - 1].classList.remove("active");
            }
        } else {
            menuitems[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", underlineMenuItem);
