window.carregarTabela = async function () {
  const tableBody = document.querySelector('#pessoaTable');

  try {
    const response = await fetch('/api/pessoa');
    const pessoa = await response.json();

    pessoa.forEach(pessoa => {
      const row = document.createElement('tr');

      Object.values(pessoa).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};