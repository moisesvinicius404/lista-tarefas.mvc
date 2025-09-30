class TarefaModel {
  constructor() {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  }

  adicionar(titulo) {
    const novaTarefa = { id: Date.now(), titulo, concluida: false };
    this.tarefas.push(novaTarefa);
    this._salvar();
  }

  remover(id) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    this._salvar();
  }

  alternarConcluida(id) {
    this.tarefas = this.tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    this._salvar();
  }

  obterTodas() {
    return this.tarefas;
  }

  _salvar() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }
}
