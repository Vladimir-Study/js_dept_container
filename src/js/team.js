export class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('A user was exist!');
    }
    this.members.add(person);
  }

  addAll(...persons) {
    persons.forEach((person) => {
      this.members.add(person);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
