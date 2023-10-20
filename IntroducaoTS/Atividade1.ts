function funcaoString(parametroString: string): void {
    console.log(`Esta função é uma string: ${parametroString}`);
  }
  
  function funcaoNumbers(parametro1: number, parametro2: number): void {
    console.log(`Esta função carrega dois numeros: ${parametro1} e ${parametro2}`);
  }
  
  function funcaoStgNumber(parametroString: string, parametroNumber: number): void {
    console.log(`Esta função possui uma string: ${parametroString} e um numero: ${parametroNumber}`);
  }
  
  funcaoString("Olá, mundo!");
  funcaoNumbers(5, 10);
  funcaoStgNumber("Exemplo", 7);