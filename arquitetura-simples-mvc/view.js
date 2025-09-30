class TarefaView {
  constructor() {
    this.lista = document.getElementById('listaTarefas');
  }

  renderizar(tarefas, { aoRemover, aoAlternar }) {
    this.lista.innerHTML = '';

    tarefas.forEach(tarefa => {
      const li = document.createElement('li');
      li.className = "flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md shadow-sm";

      const titulo = document.createElement('span');
      titulo.textContent = tarefa.titulo;
      if (tarefa.concluida) {
        titulo.classList.add('line-through', 'text-gray-500');
      }

      const botoes = document.createElement('div');

      const btnCheck = document.createElement('button');
      btnCheck.textContent = tarefa.concluida ? '↩' : '✔';
      btnCheck.className = 'text-green-600 mr-2';
      btnCheck.onclick = () => aoAlternar(tarefa.id);

      const btnDelete = document.createElement('button');
      btnDelete.textContent = '🗑';
      btnDelete.className = 'text-red-600';
      btnDelete.onclick = () => aoRemover(tarefa.id);

      botoes.append(btnCheck, btnDelete);
      li.append(titulo, botoes);
      this.lista.appendChild(li);
    });
  }
}
