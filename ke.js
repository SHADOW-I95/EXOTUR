const modal = document.getElementById('MI-MODAL');
document.getElementById('ABRIR-MODAL').addEventListener('click', () => modal.classList.add('active'));
document.getElementById('CERRAR-MODAL').addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });