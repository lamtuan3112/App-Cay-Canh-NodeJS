'use strict'

const util = require('util')
const mssql = require('mssql')
const db = require('./../db')

module.exports = {
    detail: (req, res) => {
        let sql = `SELECT * FROM News WHERE IdNews = '${req.params.IdNews}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },

    getall: (req, res) => {
        let sql = 'SELECT * FROM News'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response.recordsets[0])
        })
    },
    
    update: (req, res) => {
        let data = req.body;
        let IdCay = req.params.IdNews;
        let sql = `UPDATE News SET ${data} WHERE IdNews = '${IdNews}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = `INSERT INTO News SET ${data}`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = `DELETE FROM News WHERE IdNews = '${req.params.IdNews}'`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },
}