document.addEventListener('DOMContentLoaded', () => {
  const inputTarefa = document.getElementById('inputTarefa');
  const btnAdicionar = document.getElementById('btnAdicionar');

  const model = new TarefaModel();
  const view = new TarefaView();
  const controller = new TarefaController(model, view);

  controller.inicializar();

  btnAdicionar.addEventListener('click', () => {
    controller.adicionarTarefa(inputTarefa.value);
    inputTarefa.value = '';
  });
});
