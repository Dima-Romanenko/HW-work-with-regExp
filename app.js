let data =
  "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";

const re = /(\d{4}[- ]?){4}/g;
const correctNumbers = [];

// Помещаем в массив строки которые соответствуют шаблону
let findNumbers = data.match(re, function (item) {
  return item;
});

// Преобразуем строку к массиву, убираем лишние символыб, а элементы массива приводим к числу
res = findNumbers.map((item) => {
  item = item.split("");

  for (let i = 0; i <= item.length; i++) {
    if (item[i] == "-" || item[i] == " ") {
      item.splice(i, 1);
    }
  }

  for (let i = 0; i <= item.length; i++) {
    if (item[i] !== undefined) {
      item[i] = +item[i];
    }
  }

  return item;
});

// Функция алгоритма Луна
function checkWithLuneAlh(number) {
  let result = 0;
  for (let i = 0; i <= number.length - 1; i++) {
    let elem = number[i];
    if (i % 2 == 0) {
      elem = elem * 2;
      if (elem > 9) elem -= 9;
    }
    result += +elem;
  }
  if (result % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

// Создаем массив номеров прошедших валидацию
res.forEach((el) => {
  let res = checkWithLuneAlh(el);

  if (res) {
    correctNumbers.push(el.join(""));
  }
});

// Выводим номера в боди
for (let elem of correctNumbers) {
  // elem = elem.split("");

  // for (let i = 0; i <= elem.length - 1; i++) {
  //   if (i % 4 == 0 && i != 0) {
  //     elem[i - 1] += "-";
  //   }
  // }

  // elem = elem.join("");

  let parts = elem.match(/\d{4}/g);
  parts = parts.join(" ");

  document.body.innerHTML += `<h3>${parts}</h3>`;
}
