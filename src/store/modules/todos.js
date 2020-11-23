//vuex boiler plate module
import axios from 'axios'

const state = {
    todos: []
}
const getters = {
    allTodos: state => state.todos
}
const actions = {
//this make request , get response and calls a mutations
    //we dont call mutations directly, we commit mutations
    async fetchTodos({commit})
    {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        commit('setTodos', response.data)
    },

    async addTodo({commit}, title)
    {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title})

        commit('newTodo', response.data)
    }

}
const mutations = {

    setTodos: (state, todos) => {state.todos = todos},

    newTodo:  (state, todos) => state.todos.unshift(todos)

}

export default {
    state,
    getters,
    actions,
    mutations
}