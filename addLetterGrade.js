export function addLetterGrade(data) {
    return data.map(student => ({
        ...student,
        letter: student.score >= 90 ? "A" :
                student.score >= 75 ? "B" : "C" //Это тернарный оператор — сокращённая форма условного if/else
    }));
}