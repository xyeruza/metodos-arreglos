      const tareas = [
        { id: 100, nombre: "Asistir a clases", realizado: false },
        { id: 101, nombre: "Hacer las tareas", realizado: false },
        { id: 102, nombre: "Realizar desafio", realizado: false },
      ];

      const btn = document.querySelector("#agregar");
      const lista = document.querySelector("#lista");

      const actualizar = (id) => {
        let tareaIndex = tareas.findIndex(
          (tarea) => tarea.id === id
        );
        console.log(tareaIndex);
        tareas[tareaIndex].realizado = !tareas[tareaIndex].realizado;
        let tareasRealizados = tareas.filter(
          (tarea) => tarea.realizado == true
        );
        console.log(tareasRealizados);
        document.querySelector(
          "#realizadas"
        ).innerHTML = `Realizadas: <span class="fw-bold">${tareasRealizados.length}</span>`;
      };

      const eliminar = (id) => {
        let tareaIndex = tareas.findIndex(
          (tarea) => tarea.id === id
        );
        tareas.splice(tareaIndex, 1);
        tarea_actual();
      };

      const tarea_actual = () => {
        let html = ``;
        tareas.forEach((tarea) => {
          console.log(tarea.realizado);
          html += `<div class="row">
            <div class="col-2">${tarea.id}</div>
            <div class="col-6">${tarea.nombre}</div>  
          <div class="col-2"><input type='checkbox' onclick='actualizar(${
            tarea.id
          })' ${tarea.realizado === true ? "checked" : null}></div>
          <div class="col-2"><button class="mb-1 btn btn-danger" onclick='eliminar(${
            tarea.id
          })'><i class="fa-solid fa-trash"></i></button></div> 
          </div>
          `;
        });
        document.querySelector(
          "#cantidad"
        ).innerHTML = `Total: <span class="fw-bold">${tareas.length}</span>`;
        lista.innerHTML = html;
      };

      btn.addEventListener("click", () => {
        let value = document.querySelector("input").value;
        let num1 = 100;
        let num2 = 999;
        let numeroAleatorio = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;     //para que el numero generado sea un numero entero
        let nueva_actividad = {
            id: numeroAleatorio,
          nombre: value,
          realizado: false,
        };
        tareas.push(nueva_actividad);
        tarea_actual();
      });

      tarea_actual();