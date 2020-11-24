let calculator = {
  // ваш код
    a1: '',
    b1: '',
    read: (a, b) => {
      this.a1 = a;
      this.b1 = b;
    },
    sum: ()=> { return this.a1 + this.b1},
    mul: ()=> { return this.a1 * this.b1},
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
