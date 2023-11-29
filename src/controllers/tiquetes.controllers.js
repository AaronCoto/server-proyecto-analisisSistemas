import { pool } from "../db.js";

export const getTiquetes = async (req, res) => {

      try {
        const [rows] = await pool.query("SELECT * FROM TBL_USUARIOS");
        res.json(rows);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
  };