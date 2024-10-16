const styles = document.createElement('style');
styles.innerHTML = `
* {
    box-sizing: border-box;
}

#limit {
    width: 50px;
    margin: 0 5px;
    color: #00f;
}

input, button {
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 5px;
}

#tab {
    border-collapse: collapse;
    margin: 0 50px;
    & caption {
    margin: 20px 0;
    text-align: left;
    }
    & th, caption {
    font-weight: bold;
    }
    & th,
    td {
    border: 3px solid #000;
    height: 30px;
    padding: 5px;
    font-size: 20px;
    }
}`;
const body = document.querySelector('body');
body.before(styles);

const th = 
  `<table id="tab">
  <caption>
    Вибрати сповіщувачі зі значенням більше
    <input id="limit" type="number" value="77">
    <button onclick="filter()">Ok</button>
  </caption>
  <tr>
    <th>Панель</th>
    <th>Шлейф</th>
    <th>Адреса</th>
    <th>Забрудн.</th>
    <th>Опис</th>
    <th>Зона</th>
  </tr>
  </table>
  `;

document.querySelector('table').insertAdjacentHTML("afterend", th);
const tab = document.getElementById("tab");

const tables = document.getElementsByTagName('table');
const limit = document.getElementById('limit');
const tab1 = tables[2];
const tab2 = tables[3];
const panel = tables[0].rows[5].cells[1].innerText;

function cleartable(tab) {
  let n = tab.rows.length;
  for (let i=1; i<n; i++) {
  tab.rows[i].remove()
    }
}

function iteration(mas) {
  const scan = {};
  for (let tr of mas) {
    let [d0, d1, ...rest] = tr.cells;
    let adr = [d0.innerText, d1.innerText];
    let date = rest.map(n => n = n.innerText);
    scan[adr] = date
  }
  return scan
}

const massiv1 = iteration(tab1.rows);
const massiv2 = iteration(tab2.rows);
const adress = Object.keys(massiv2);

function filter() {
  let m = Array.from(tab.rows);
  m.slice(1).forEach(n => n.remove());
  const lim = limit.value;
  for (let m of adress.slice(1)) {
    let val = massiv2[m][3];
    if (val > lim ) {
      let [line, adr] = m.split(',');
      let discr = massiv1[m][2];
      let zone = massiv1[m][3];
      let str = `
        <td>${panel}</td>
        <td>${line}</td>
        <td>${adr}</td>
        <td>${val}</td>
        <td>${discr}</td>
        <td>${zone}</td>`;
      let tr = document.createElement("tr");
      tr.innerHTML = str;
      tab.appendChild(tr)    
    }
  }
}
