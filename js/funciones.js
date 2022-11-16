// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.


let threeArguments = (stringName, age, livesIn) => { 
    if (livesIn.livesInCity === true && livesIn.livesInTown === false) {
        return `${stringName} tiene ${age} años y vive en la ciudad`;
    } else {
        return `${stringName} tiene ${age} años y vive en el pueblo`;
        }
    }

    console.log(threeArguments("Jarko", 25, {livesInCity: true, livesInTown: false}));
    console.log(threeArguments("Martina", 42, {livesInCity: false, livesInTown: true}));
    console.log(threeArguments("Laia", 78, { livesInCity: false, livesInTown: true }));
    


    