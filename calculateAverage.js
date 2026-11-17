export function calculateAverage(data) { 
    const total = data.reduce((sum, student) => sum + student.score, 0); //Он проходит по всему массиву и складывает оценки студентов.

    return total / data.length;
}

//export позволяет использовать функцию в других файлах.
//function объявляет функцию
//data массив студентов, который мы передадим ей