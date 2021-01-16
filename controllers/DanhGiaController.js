'use strict'

const util = require('util')
const mssql = require('mssql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM DanhGia'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    detail: (req, res) => {
        let sql = `SELECT * FROM DanhGia WHERE HoTen = '${req.params.HoTen}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let HoTen = req.params.HoTen;
        let sql = `UPDATE DanhGia SET ${data} WHERE HoTen = '${HoTen}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    danhgia: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO DanhGia (BinhLuan) VALUES (N'${req.params.BinhLuan}')`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
}