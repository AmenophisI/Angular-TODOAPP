import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [];

  constructor() { }

  /**
   * 新規登録
   */
  addToList(todo: Todo): void {

  }

  /**
   * 一件取得
   */
  get(id: number): Todo|undefined {
    return this.todoList.find(t => t.id === id);
  }

  /**
   * 更新
   */
  edit(todo: Todo): void {

  }

  /**
   * ステータス変更
   */
  proceedStatus(id: number): Todo[] {

    return this.todoList;
  }

  /**
   * 一件削除
   */
  delete(id: number): void {

  }

  /**
   * 全件取得
   */
  getList(): Todo[] {
    return this.todoList.sort((a, b) => a.startDate > b.startDate ? 1 : -1);
  }

  /**
   * 全件削除
   */
  clearList(): Todo[] {
    this.todoList = [];
    return this.todoList;
  }
}
