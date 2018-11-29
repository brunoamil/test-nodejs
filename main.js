class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));
//=============== comentarios de código anterior ==================
/*class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    //primeiro metodo quando instanciar esta classe é o constructor
    constructor() {
        //usando o super para pegar as variaveis da classe PAI (list)
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

//instanciando esta classe

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

 MinhaLista.mostraUsuario();  


 // testando chamar o metodo sem precisar instanciar com New

 class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }

 }

 TodoList.addTodo();
 TodoList.addTodo();
 TodoList.addTodo();
 TodoList.addTodo();
 TodoList.addTodo();*/

