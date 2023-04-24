package teste;

import java.util.Stack;

public class exercicio1 {

    public static void main(String[] args) {

        Stack<Integer> pilha = new Stack<Integer>();
        System.out.println("Pilha vazia: " + pilha);

        pilha.push(0);
        System.out.println("Insere o valor 0 no topo da pilha: " + pilha);

        pilha.push(1);
        System.out.println("Insere o valor 1 no topo da pilha: " + pilha);

        pilha.push(2);
        System.out.println("Insere o valor 2 no topo da pilha: " + pilha);

        pilha.push(3);
        System.out.println("Insere o valor 3 no topo da pilha: " + pilha);

        pilha.push(4);
        System.out.println("Insere o valor 4 no topo da pilha: " + pilha);

        pilha.remove(4);
        System.out.println("Removendo elemento que está no topo da pilha: " + pilha);

        pilha.pop();
        System.out.println("Removendo elemento que está no topo da pilha: " + pilha);

        pilha.pop();
        System.out.println("Removendo elemento que está no topo da pilha: " + pilha);

        pilha.pop();
        System.out.println("Removendo elemento que está no topo da pilha: " + pilha);

        pilha.pop();
        System.out.println("Removendo elemento que está no topo da pilha: " + pilha);
    }

}
