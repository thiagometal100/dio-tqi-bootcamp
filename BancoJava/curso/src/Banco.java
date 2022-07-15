import java.util.List;

public class Banco {
	
	private String nome;
	private List<Conta> contas;
	
	//Default Constructor
	
	public Banco(String nome) {this.nome = nome;}
	
	//Getters and Setters
	public String getNome(String nome) {return nome;}
	
	public List<Conta> getContas() {
		System.out.println(String.format("Lista de Contas neste banco %s:", this.nome));
		return contas;
		}

	public void setContas(List<Conta> contas) {
			this.contas = contas;
	}
}
