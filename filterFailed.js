export function filterFailed(data, passScore) {
    return data
        .filter(student => student.score < passScore) //Метод проверяет каждого студента и оставляет только тех, у кого оценка меньше проходного балла
        .map(student => student.name);// Преобразует объекс в строку
}