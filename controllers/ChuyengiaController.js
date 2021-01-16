'use strict'

const util = require('util')
const mssql = require('mssql')
const db = require('./../db')

module.exports = {
    detail: (req, res) => {
        let sql = `SELECT * FROM ChuyenGia WHERE IdChuyenGia = '${req.params.IdChuyenGia}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },

    getchuyengia: (req, res) => {
        let sql = 'SELECT * FROM ChuyenGia'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    
    update: (req, res) => {
        let data = req.body;
        let IdChuyenGia = req.params.IdChuyenGia;
        let sql = `UPDATE ChuyenGia SET ${data} WHERE IdChuyenGia = '${IdChuyenGia}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO ChuyenGia SET ${data}`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = `DELETE FROM ChuyenGia WHERE IdChuyenGia = '${req.params.IdChuyenGia}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },
}