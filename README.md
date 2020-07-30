# MicroserviceUbuntu1
Este proyecto incluye una estructura basica para recibir y procesar y enviar una determinada información que corresponde a recibir un rango de valores,
calcular un numero aleatorio en base a ellos y devolver una frase de un arreglo
en la posición del random.

Uso
Descargar e instalar dependencias del package.json con npm
ejecutar node index.js port
port = al puerto donde quiera ejecutar el servicio.

Argumentos opcionales:
isSleep: activar una promesa para demorar el servicio un tiempo (ms) random en relacion a un rango (1 o null)
maxTimeSleep: Tiempo maximo que puede tener la demora (ms)
Ejemplo de ejecucion con demora:
ejecutar node index.js port 1 5000

la ruta del servicio es: /api/ubuntu1/min:number/max:number

Excepciones y sus significados:
Cod             Error
1001        El servicio no permite como parametros numeros iguales
1002        Error de rangos, el valor maximo > valor minimo
1003        Error de rangos, los parametros no pueden ser nulos
1004        El servicio debe funcionar con numeros enteros positivos
1005        Error, el servicio acepta un rango entre 1 y longitud del arreglo de frases
5555        El servicio no pudo reconocer el error