    import {pool} from '../db.js';

    export const getEmployee = async (req, res) => {
        try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows);
        } catch (error) {
            return res.status(500).json({
                message: 'Algo fue mal',                
            });
        }
    }

    export const getEmployeeById = async (req, res)  => {  

        try {            
            const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
             if (rows.length <= 0) {
                return res.status(404).json({
                message: 'Employee not found'
                });
            }   
            res.json(rows[0]);
        } catch (error) {
            return res.status(500).json({
                message: 'Algo fue mal'
            });  
        }      

    }

    export const createEmployees = async (req, res) => {
        const {name, salary} = req.body;
        try {
            
            const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])        
            res.send({
            id: rows.insertId,
            name,
            salary,
        })

        }catch (error) {
            return res.status(500).json({
                message: 'Algo fue mal'
            });
        }

        
    }

    export const deleteEmployee = async (req, res) => {
        try {
            const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        
        if (result.affectedRows <= 0)return res.status(404).json({
            message: 'employee not found'
        })

        res.snedStatus(204).json({
            message: 'Employee deleted'
        })
        } catch (error) {
            return res.status(500).json({
                message: 'Algo fue mal'
            });
            
        }
        
    }

    export const updateEmployee = async (req, res) => {
        try {
            const {id} = req.params;
            const {name, salary} = req.body
            const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        
            if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])


        res.json(rows[0])
        } catch (error) {
            return res.status(500).json({
                message: 'Algo fue mal'
            })    
            
        }
        
    }

    