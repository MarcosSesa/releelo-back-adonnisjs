import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

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

  @hasMany(() => Book)
  public books: HasMany<typeof Book>

  @belongsTo(() => User)
  public owner: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}