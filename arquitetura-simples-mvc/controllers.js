class TarefaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  inicializar() {
    this.view.renderizar(this.model.obterTodas(), {
      aoRemover: id => this.removerTarefa(id),
      aoAlternar: id => this.alternarTarefa(id)
    });
  }

  adicionarTarefa(titulo) {
    if (!titulo.trim()) return alert('Digite uma tarefa!');
    this.model.adicionar(titulo);
    this.inicializar();
  }

  removerTarefa(id) {
    this.model.remover(id);
    this.inicializar();
  }

  alternarTarefa(id) {
    this.model.alternarConcluida(id);
    this.inicializar();
  }
}
