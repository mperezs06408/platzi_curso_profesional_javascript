enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
}

//interfaces
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
};

let rect: Rectangulo = {
    ancho: 4,
    alto:6,
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRec = area(rect);

console.log(areaRec);

rect.toString = function() {
    return this.color ? `Un rectángulo ${this.color}`:`Un rectángulo`;
}

console.log(rect.toString());