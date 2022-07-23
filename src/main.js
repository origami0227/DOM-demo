const div = dom.find("#test>.red")[0];
console.log(div);
dom.style(div, "color", "red"); // 设置 div.style.color

const divList = dom.find(".red"); // 获取多个 div.red 元素
console.log(divList);
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素
