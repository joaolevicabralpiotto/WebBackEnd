//1. O Código 1, que usa function. Ele imprime "Maria" corretamente.
// 2. Código 2 usa arrow function, que não tem this próprio. Ela usa o this de onde foi escrita (fora do objeto), não o pessoa. Por isso dá undefined.
//3. Arrow function não define this pela chamada. Ela herda o this do local onde foi criada, e isso nunca muda.