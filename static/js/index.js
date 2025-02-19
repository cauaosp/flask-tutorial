function formatarData(input) {
  const firstDate = input.split(" ")[0];
  const [year, month, day] = firstDate.split("-");
  const date = `${day}/${month}/${year}`;
  const hour = input.split(" ")[1].slice(0, 8);
  console.log(input);

  return { date, hour };
}

window.onload = function () {
  const dataCells = document.querySelectorAll("#custom-datetime");

  dataCells.forEach(function (cell) {
    const data = cell.innerText;
    const { date, hour } = formatarData(data);

    cell.innerHTML = `
      <span style="font-size: 16px;">${date}</span>
      <br>
      <span style="font-size: 14px;">${hour}</span>
    `;
  });
};
