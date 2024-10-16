const fs = require('fs');
const path = [
    'Отчет о сотоянии точек-1.html',
    'Отчет о сотоянии точек-2.html',
    'Отчет о сотоянии точек-3.html'
];
let code = '<script src="script.js"></script>';
// path.forEach(n => fs.appendFileSync(n, code));

function insert(file) {
    let str = fs.readFileSync(file, 'utf8');
    let massiv = str.toString().split('\n');
    let end = massiv.pop();
    massiv.push(code);
    massiv.push(end);
    fs.writeFileSync('new' + file, massiv.join('\n'));
}

path.forEach(n => insert(n))
