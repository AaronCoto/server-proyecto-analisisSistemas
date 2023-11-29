import { pool } from "../db.js";

export const getTiquetes = async (req, res) => {

      try {
        const [rows] = await pool.query("SELECT * FROM TBL_USUARIOS");
        res.json(rows);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
  };

  export const getUserByID = async (req, res) => {
    try {
        //id es api/user/:id
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM TBL_USUARIOS WHERE id = ?", [ id,]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

  export const createUser = async (req, res) => {
    try {
      const { CORREO, CONTRASENA, ROL } = req.body;
      const [rows] = await pool.query(//values("aaron@gmail.com","12345",1 este hace referencia a TBL_ROLES) referencia
        "iNSERT INTO TBL_USUARIOS(CORREO,CONTRASENA,ROL) VALUES (?, ?)",  
        [CORREO, CONTRASENA, ROL]
      );
      res.status(201).json({ id: rows.insertId, CORREO });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

  export const Getlogin = async (req,res)=>{
    try{
        const {CORREO,CONTRASENA}= req.body;
        const [rows] = await pool.query("select * from TBL_USUARIOS WHERE CORREO = ? AND CONTRASENA = ?",
        [ CORREO,CONTRASENA]);
        if (rows.length <= 0) {
            return res.status(404).json({ message: "USUARIO NO EXISTE" });
          }
      
          res.json(rows[0]);
    }catch (err){
        res.json(err)
    }
  }
  
  export const update = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
  
      const [result] = await pool.query(
        "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
        [name,  id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Employee not found" });
  
      const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  