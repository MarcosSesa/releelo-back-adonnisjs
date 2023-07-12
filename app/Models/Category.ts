import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'category_name' })
  public categoryName: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships -----------------------------

  @manyToMany(() => Book, {
    pivotTable: 'book_category',
  })
  public books: ManyToMany<typeof Book>
}
