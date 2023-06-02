import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
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
  public categoriesIds: number[]

  @hasMany(() => Category)
  public categoriesId: HasMany<typeof Category>

  @belongsTo(() => User)
  public owner: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
