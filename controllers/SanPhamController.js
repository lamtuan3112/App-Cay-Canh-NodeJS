'use strict'

const util = require('util')
const mssql = require('mssql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM Cay'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    search: (req, res) => {
        let sql = `SELECT * FROM Cay WHERE TenCay LIKE N'%${req.params.TenCay}%'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    detail: (req, res) => {
        let sql = `SELECT * FROM Cay WHERE IdCay = '${req.params.IdCay}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let IdCay = req.params.IdCay;
        let sql = `UPDATE Cay SET ${data} WHERE IdCay = '${IdCay}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO Cay SET ${data}`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = `DELETE FROM Cay WHERE IdCay = '${req.params.IdCay}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },
    yeuthich: (req, res) => {
        let sql = `SELECT * FROM Cay WHERE YeuThich=1`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    }
}