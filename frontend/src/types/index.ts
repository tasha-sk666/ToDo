export interface Todo {
  id: string;
  title: string;
}
export interface ITodoIdentification {
    id: string
  }
  
export interface ITodoFields {
  title: string,
}

export interface ITodoAttributes {
  attributes: Partial<ITodoFields> & Pick<ITodoFields, 'title'>
}

export interface ITodo extends ITodoIdentification, ITodoAttributes{}