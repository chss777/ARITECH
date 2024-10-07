const tables = document.getElementsByTagName('table');
const tab = document.getElementById("tab");
const tab1 = tables[2];
const tab2 = tables[3];
const panel = tables[0].rows[5].cells[1].innerText;
const lim = 79;

const styl = document.createElement('style');
styl.innerHTML = `            
#tab {
    border-collapse: collapse;
    margin: 0 50px;
    & caption {
    margin: 20px 0;
    text-align: left;
    }
    & th,
    caption {
    font-weight: bold;
    }
    & th,
    td {
    border: 3px solid #000;
    height: 30px;
    padding: 5px;
    }
}`;
const body = document.querySelector('body');
body.before(styl);

function addtr(str) {
    let tr = document.createElement("tr");
    tr.innerHTML = str;
    tab.appendChild(tr)
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
  for (let m of adress) {
    let val = massiv2[m][3];
    if (val > lim) {
      let [line, adr] = m.split(',');
      console.log('shl: ' + line + ' | ' + 'adr: ' + adr + ' | ' + 'value = ' + val );
      let discr = massiv1[m][2];
      let zone = massiv1[m][3];
      let str = `
        <td>${panel}</td>
        <td>${line}</td>
        <td>${adr}</td>
        <td>${val}</td>
        <td>${discr}</td>
        <td>${zone}</td>`;
      addtr(str)
    }
  }
}
