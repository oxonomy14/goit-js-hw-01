function getElementWidth(content, padding, border) {
  //content— перший параметр, ширина контенту
  //padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
  //border — третій параметр, значення товщини бордера для кожної зі сторін
  //Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове

  const boxSizing =
    Number.parseFloat(content) +
    2 * Number.parseFloat(padding) +
    2 * Number.parseFloat(border);

  return boxSizing;
}

//console.log(getElementWidth(50, 8, 4));

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
