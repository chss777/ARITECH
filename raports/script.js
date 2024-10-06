const tables = document.getElementsByTagName('table');
const tab = document.getElementById("tab");
const tab1 = tables[2];
const tab2 = tables[3];
const points = {};

let panel = tables[0].rows[5].cells[1].innerText;
// let line = tab1.rows['1'].cells[0].innerText;

const str = `
  <td>1</td>
  <td>4</td>
  <td>12</td>
  <td>69</td>
  <td>Тех. кор. B8-B10</td>
  <td>301</td>`

function addtr() {
    let tr = document.createElement("tr");
    tr.innerHTML = str;
    tab.appendChild(tr)
}

function createMassiv() {
  for (let i=1; i<tab2.rows.length; i++) {
    let line = tab2.rows[i].cells[0].innerText;
    let adr = tab2.rows[i].cells[1].innerText;
    let zone = tab2.rows[i].cells[4].innerText;
    let val = tab2.rows[i].cells[5].innerText;
    let item = {
      line,
      adr,
      val,
      zone,
    }
    points[`s${line}a${adr}`] = item
  }
}

function iteration(mas) {
  for (let tr of mas) {
    let [d0, d1, , , d4, d5] = tr.cells;
    let line = d0.innerText;
    let adr = d1.innerText;
    let val = d4.innerText;
    let zone = d5.innerText;
    let item = {
      line,
      adr,
      val,
      zone,
    }
    points[`s${line}a${adr}`] = item
  }
}

function addDiscription() {
  for (let n of tab1.rows) {
    let discr = n.cells[4].innerText;
    let line = n.cells[0].innerText;
    let adr = n.cells[1].innerText;
    const ind = 's' + line + 'a' + adr;
    // points[`s${line}a${adr}`].discr = discr;
    points[ind].discr = discr
  

    // setTimeout(() => points[ind].discr = discr, 0)

    // if (
    //   adress == points[ind].adr
    // ) {
    //   points[ind].discr = discr
    // }
  }
}