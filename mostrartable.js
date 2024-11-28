document.addEventListener('DOMContentLoaded', () => {
    const tabelaContainer = document.querySelector('#tabelaContainer');
    const toggleTabelaBtn = document.querySelector('#toggleTabela');
    let tabelaCarregada = false;
  
    if (tabelaContainer && toggleTabelaBtn) {
      toggleTabelaBtn.addEventListener('click', () => {
        if (tabelaContainer.style.display === 'none') {
          tabelaContainer.style.display = 'block';
          toggleTabelaBtn.textContent = 'Ocultar Tabela';
  
          if (!tabelaCarregada) {
            carregarTabela();
            tabelaCarregada = true;
          }
        } else {
          tabelaContainer.style.display = 'none';
          toggleTabelaBtn.textContent = 'Mostrar Tabela';
        }
      });
    } else {
      console.error('Elementos #tabelaContainer ou #toggleTabela não encontrados');
    }
  });
  