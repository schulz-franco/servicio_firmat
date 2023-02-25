import { db } from "@/database/db";
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
	try {
		const { username, password } = req.body;
		// Aca meteriamos validaciones
		const passwordHash = await bcrypt.hash(password, 10);
		const result = await db.query(`INSERT INTO usuarios (nombre, usuario, contraseña) VALUES ('pepe', '${username}', '${passwordHash}')`);
		await db.end();
		res.status(200).json({
			error: null,
			message: "Usuario creado",
			data: {
				id: result.insertId,
				nombre: "pepe",
				usuario: username,
				contraseña: passwordHash
			}
		});
	} catch {
		res.status(500).json({
			error: true,
			message: "Ocurrio un error"
		});
	}
}
