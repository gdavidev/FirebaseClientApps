export default class Todo {
    id = '';
    name = '';
    description = '';
    done = false;

    constructor(id, name, description, done) {
        this.id = id
        this.name = name
        this.description = description
        this.done = done
    }
}