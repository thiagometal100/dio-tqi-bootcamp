import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		//Cria��o da conta e cliente
		List <Conta> contas = new ArrayList<>();
		Banco banco = new Banco("Bradesco");
		Cliente cliente = new Cliente("Robson");
		ContaCorrente cc = new ContaCorrente(cliente);
		Conta cp = new ContaPoupanca(cliente);
		contas.add(cc);
		contas.add(cp);
		banco.setContas(contas);
		
		//Opera��es banc�rias
		cc.depositar(20);
		cc.sacar(30);
		cc.transferir(5,cp);
		cc.imprimirExtrato();
		cp.imprimirExtrato();
		System.out.println(banco.getContas());
		
	}

}
