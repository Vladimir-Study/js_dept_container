export class ErrorRepository {
  constructor() {
    this.erros = new Map(
      [
        ['200', 'OK'],
        ['201', 'Created'],
        ['202', 'Accepted'],
      ],
    );
  }

  translate(code) {
    if (this.erros.get(code) !== undefined) {
      return this.erros.get(code);
    }
    return 'Unknown error';
  }
}
