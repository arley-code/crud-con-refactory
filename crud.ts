
//console.log("Hola mundo")
import {herramientas} from './herramientas.ts';
import {client} from './config/base_datos.ts';
import { UsuariosModel } from "./models/user.ts";
import { UsuarioDTO } from "./dto/usuario.ts";
import {UsuarioController} from "./controllers/usuario.ts";

const usuariosModel = new UsuariosModel();
const usuarioController = new UsuarioController();

let crud

do {
    console.log("Menu")
    console.log("1. Crear un usuario");
    console.log("2. Editar un usuario");
    console.log("3. Listar todos los usuarios");
    console.log("4. Eliminar usuario");
    console.log("5. Salir");
    crud = parseInt(prompt("Seleccione una opción: ") as string);


    switch (crud) {
        case 1: {
                 await usuarioController.create()
        }
            break;
        case 2 : {     
            await usuarioController.listar();
            const id = parseInt(prompt("Seleccione el ID que desea actualizar") as string);
            await usuarioController.update(id);
            break;
        }
        case 3 : {
            await usuarioController.listar();
            break;

        }
        case 4 : {     
           await usuarioController.listar();
           const id=parseInt(prompt("Seleccion el Id para eliminar: ")as string)
           await usuarioController.eliminar(id);
            break;
        }
        case 5 : {
            break;
        }
    }}
    while (crud != 5)




