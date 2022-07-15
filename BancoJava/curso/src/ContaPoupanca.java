
public class ContaPoupanca extends Conta{

	protected ContaPoupanca(Cliente cliente) {
		super(cliente);
	}
	@Override
	public void imprimirExtrato() {
		System.out.println("---Extrato Conta Poupan�a---");
		super.extrato();
	}

	@Override
	public String toString() {
		return String.format("Agencia: %s Conta Poupan�a: %d \n", super.getAgencia(), super.getNumero());
		}
}
