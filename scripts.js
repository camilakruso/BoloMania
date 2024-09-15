// Exemplo de uma simples função de carrinho
document.querySelectorAll('.saiba-mais').forEach(link => {
    link.addEventListener('click', () => {
        alert('Você será redirecionado para a página de detalhes do bolo!');
    });
});