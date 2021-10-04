import { db } from 'db'
import { IBaseFormProps } from './__form'
type DBTables = keyof typeof db

/** TYPE SEPARATOR - DO NOT DELETE THIS COMMENT **/

export type IFieldType =
  | 'text'
  | 'string'
  | 'json'
  | 'array'
  | 'boolean'
  | 'number'
  | 'date'
  | 'relation'
  | 'phone'
  | 'select'
  | 'info'
  | 'password'
  | 'loading'
  | 'map'
  | 'rich'
  | 'money'
  | 'file'
  | 'multiline'
  | 'belongs-to'
  | 'has-many'


export type IQueryComponent = (props: IBaseFormProps) => any
export type qform = IBaseFormProps
