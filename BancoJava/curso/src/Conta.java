
public abstract class Conta {
	//attributes
	private static final int AGENCIA_PADRAO = 0001;
	private static int SEQUENCIAL = 1;
	private int agencia;
	private int numero;
	private double saldo = 0;
	protected Cliente cliente;
	
	
	//Default constructor
	protected Conta(Cliente cliente) {
		this.agencia = AGENCIA_PADRAO;
		this.numero = SEQUENCIAL++;
		this.cliente = cliente;
	}
	
	//getters for attributes
	protected int getAgencia () {return agencia;}
	protected int getNumero () {return numero;}
	protected double getSaldo() {return saldo;}
	
	
	//Methods
	protected void depositar(double valor) {
		saldo += valor;
	}
	
	protected void sacar (double valor) {
		if (valor > saldo) {
			System.out.println("Não foi possível sacar: Valor superior ao saldo em conta");
		}else {saldo -= valor;}
	}	
	
	protected void imprimirExtrato() {}
	
	protected void extrato() {
		System.out.println(String.format("Cliente : %s", cliente.getNome()));
		System.out.println(String.format("Agencia : %d", agencia));
		System.out.println(String.format("Conta   : %d", numero));
		System.out.println(String.format("Saldo   : %.2f", saldo));
	}
	
}