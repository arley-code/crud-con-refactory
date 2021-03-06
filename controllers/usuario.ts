import {UsuariosModel} from "../models/user.ts";
import {UsuarioDTO} from "../dto/usuario.ts";
import {client} from "../config/base_datos.ts";
import {herramientas} from "../herramientas.ts";

const usuariosModel = new UsuariosModel();

export class UsuarioController {
    async listar(){
        const  usuarios = await usuariosModel.listar();
        console.log(usuarios);

    }


    async create(){

            const user = herramientas();
            await usuariosModel.crear({

            nombre: user.getNombre(),
            apellido: user.getApellido(),
            celular: user.getCelular(),
            correo: user.getCorreo(),
            password: user.getPassword(),

        });

    }

    async update(id:number) {
        const user = herramientas();
        await usuariosModel.actualizar({
            nombre: user.getNombre(),
            apellido: user.getApellido(),
            celular: user.getCelular(),
            correo: user.getCorreo(),
            password: user.getPassword(),
        }, id);
    }

    async eliminar(id: number){

        await usuariosModel.eliminar(id);

    }

}