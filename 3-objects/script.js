//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

for (const key in bus) {
    const value = bus[key];

    if (typeof value === "object") {
        console.log(key + " : " + JSON.stringify(value));
    } else {
        console.log(key + " : " + value);
    }
}

//3.2 Object.values

for (const perturbation in data) {
    console.log(perturbation + " : " + data[perturbation].texte);
}