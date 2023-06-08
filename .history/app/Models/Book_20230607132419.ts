import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  HasMany,
  ManyToMany,
  belongsTo,
  column,
  hasMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public descripcion: string

  @column()
  public year: number

  @column()
  public autor: string

  @column({ serializeAs: null })
  public userId: number

  @column({ serializeAs: null })
  public categoryId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships ---------------------------------------

  @manyToMany(() => Category, {
    pivotTable: 'categories',
  })
  public categories: ManyToMany<typeof Category>

  @belongsTo(() => User)
  public owner: BelongsTo<typeof User>
}
