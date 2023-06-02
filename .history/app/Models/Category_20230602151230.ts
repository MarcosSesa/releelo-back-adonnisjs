import { DateTime } from 'luxon'
import { BaseModel, HasMany, ManyToMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public categoryName: string

  @manyToMany(() => Book, {
    pivotTable: 'Books',
  })
  public books: ManyToMany<typeof Book>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
