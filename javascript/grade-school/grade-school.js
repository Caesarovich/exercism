//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #roster = {}

  studentExists(student) {
    for (const students of Object.values(this.#roster)) {
      if (students.includes(student)) return true
    }

    return false
  }

  removeStudent(student) {
    for (const grade of Object.keys(this.#roster)) {
      this.#roster[grade] = this.#roster[grade].filter(s => s !== student)
    }
  }

  roster() {
    return structuredClone(this.#roster)
  }

  add(student, grade) {
    if (!this.#roster[grade]) this.#roster[grade] = [];


    if (this.studentExists(student)) return this.removeStudent(student); // Error

    this.#roster[grade].push(student);

    this.#roster[grade].sort()
  }

  grade(g) {
    if (g) return [...this.#roster[g] ?? []] ;
    else return this.roster()
  }
}
