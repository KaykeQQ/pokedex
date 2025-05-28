/*quando clicar no pokemon da listagem temos que esconder
 o cartão do pokemon aberto e mostrar o cartao correspondente
 ao que foi selecionado no clique
 pra isso vamos usar os elementos:
 1 - listagem
 2 - cartao pokemon
 */

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemon.forEach(pokemon =>{
    pokemon.addEventListener('click',() =>{
        //remover a classe aberto so do cartao que ta aberto
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        //vamos pegar o ID do poqkemon que esta na listagem
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const idDoCartaoParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        idDoCartaoParaAbrir.classList.add('open')

        //arrumando a cor da listagem
        //arrumand a cor da listagem
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
})
    })
    