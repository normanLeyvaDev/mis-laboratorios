// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
// se tiene que declarar una funcion asincrona y luego llamarla
// getInstruction();

obtainInstruction("steak", 0)
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// It.3

async function makeBroccoli() {
  for (let paso of broccoli) {
    const paso1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${paso}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}

makeBroccoli();
// ...
// const obtainInstruction = async () => {
//   document.querySelector("#broccoli").innerHTML += `<li>${paso}</li>`;
//   return obtainInstruction("broccoli", 1);
// };

// Bonus 2 - Promise all
// guardamos las llamadas individuales en constantes
const paso0 = obtainInstruction("brusselsSprouts", 0);
const paso1 = obtainInstruction("brusselsSprouts", 1);
const paso2 = obtainInstruction("brusselsSprouts", 2);
const paso3 = obtainInstruction("brusselsSprouts", 3);
const paso4 = obtainInstruction("brusselsSprouts", 4);
const paso5 = obtainInstruction("brusselsSprouts", 5);
const paso6 = obtainInstruction("brusselsSprouts", 6);
const paso7 = obtainInstruction("brusselsSprouts", 7);

Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7])
  .then((valorDelArray) => {
    valorDelArray.forEach((instruccion) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${instruccion}</li>`;
    });

    // Se encarga de añadir el texto a pelo y quitar la img
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>brussels sprouts are ready!</li>`;

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((Error) => console.log(error));

// CON ASYNC AWAIT
// async function makeBrusselsSprouts() {
//   // try & catch
//   try {
//     // crear variable para hacer generar el constructor con la palabra Promise y le encadenamos el metodo .all() con todas las variables definidas arriba. recuerda que tenemos que esperar a todas estas llamadas.
//     const valores await Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7]);

//     valores.forEach((instruccionDePaso) => {
//       document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruccionDePaso}</li>`;
//       document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;

//       document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   }
// makeBrusselsSprouts();
