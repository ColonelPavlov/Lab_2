export function findTopStudent(data) {
    const topStudent = data.reduce((best, student) => {
        return student.score > best.score ? student : best;
    });

    return topStudent.name;
}