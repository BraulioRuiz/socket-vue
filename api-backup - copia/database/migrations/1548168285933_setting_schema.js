'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.increments()
      table.string('name')
      table.string('name_db')
      table.string('user_db')
      table.string('password_db')
      table.string('decription')
      table.date('date_backup')
      table.time('time_backup')
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = SettingSchema
