import { client } from "../config/base_datos.ts";
import { UsuarioDTO } from "../dto/usuario.ts";

export class UsuariosModel {
    async listar() : Promise<UsuarioDTO[]>{
        const usuarios = await client.execute('select * from registros');
        return usuarios.rows as UsuarioDTO[];
    }

    async crear(usuario: UsuarioDTO) {
        await client.execute('INSERT INTO registros (nombre,apellido,celular,correo,password) values (?,?,?,?,?)', [
            usuario.nombre,
            usuario.apellido,
            usuario.celular,
            usuario.correo,
            usuario.password,
        ]);
    }

    async actualizar(user: UsuarioDTO, id: number): Promise <void> {
        await client.execute(`update registros set nombre = ?,apellido = ?,celular = ?,correo = ?,password = ? WHERE id = ?`, [
            user.nombre,
            user.apellido,
            user.celular,
            user.correo,
            user.password,
            id,
        ]);
    }


    async eliminar(id: number) : Promise <void>{

        await client.execute('delete from registros where id =?', [id])

    }
}