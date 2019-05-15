import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    @action addItem = (name) => {
        this.list.push(new Item(name) )
    }
    @action editItem = (name,location) => {
        let item = this.list.find(l => l.name === name)
        console.log(item)

        item.location = location
    }
    @action deleteItem = (name) =>{
        let item = this.list.findIndex(l => l.name === name)
        console.log(item)
        this.list.splice(item,1)
        

    }
  //other methods
}


