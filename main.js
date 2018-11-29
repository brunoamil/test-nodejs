


//usando Object Short Syntax

const nome = 'Diego';
const idade = 23;

const usuario = {
    
    // quando voce tem o nome da mesma variavel, nao é necessario colocar nome: nome, voce omite.
    nome,
    idade,
    empresa: 'Rocketseat'
};

console.log(usuario);

//=============== comentarios de código anterior ==================



/*
// usando template literal

const nome = 'Bruno';
const sobrenome = 'Lima';

console.log(`Meu nome é ${nome} e meu sobrenome é ${sobrenome}.`);

// USANDO SPREAD

 const  arr1 = [1,2,3,4];
 const arr2 = [3,4,5,6];

 const arr3 = [ ...arr1, ...arr2];

 console.log(arr3);

 //USANDO SPREAD 2 

 const usuario1 = {
     nome: 'Diego',
     idade: 23,
     empresa: 'Rocketseat',
 };

 const usuario2 = {...usuario1, nome: 'Gabriel'};

 console.log(usuario2);

// usando o REST

const usuario = {
    nome: 'Bruno',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//usando rest 2

const arr = [1,2,3,4,5];

const [a, b, ...c] = arr;

//console.log(a);
//console.log(b);
console.log(c);

//usando rest 3

function soma (a, b, c) {
    return a + b + c;
}

console.log(soma(1,3, 4));

//usando rest 4

function soma (...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1,3,4));


const usuario = {
    nome: 'bruno',
    idade :'22',
    endereco: {
        cidade: 'slz',
        estado: 'MA'
    },
};

 // desestruturaçao 
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
//desestruturacao 2 
function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);





const arr = [1,2,3,4,5,6];

const newArr = arr.map(item  =>  item * 2);

console.log(newArr);

const teste = () => ({ nome: 'bruno'});

console.log(teste());

const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index){
    return item + index;
}); 

console.log(newArr); 


const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 2;
});

console.log(find);
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));
class List {
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

