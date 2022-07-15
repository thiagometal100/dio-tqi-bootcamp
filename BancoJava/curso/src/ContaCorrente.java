
public class ContaCorrente extends Conta{

	protected ContaCorrente(Cliente cliente) {
		super(cliente);
	}

	public void transferir (double valor, Conta contaDestino) {
	this.sacar(valor);
	contaDestino.depositar(valor);
	}
	@Override
	public void imprimirExtrato() {
		System.out.println("---Extrato Conta Corrente---");
		super.extrato();
	}
	@Override
	public String toString() {
		return String.format("Agencia: %s Conta Corrente: %d \n", super.getAgencia(), super.getNumero());
		}
}
