// auth.js
// Este arquivo agora usa a conexão centralizada e cuida da segurança das páginas.

// 1. Importa a conexão 'supabase' do nosso arquivo mestre.
import { supabase } from './supabase-client.js'

// Função que verifica o estado do login em tempo real
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'INITIAL_SESSION' && !session) {
    window.location.href = 'login.html'
  } else if (event === 'SIGNED_OUT') {
    window.location.href = 'login.html'
  }
})

// Função para fazer o logout
async function fazerLogout () {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Erro ao fazer logout', error)
  }
  // O redirecionamento já é tratado pelo onAuthStateChange
}

// Adiciona o evento de clique ao botão de logout assim que a página carregar
window.addEventListener('DOMContentLoaded', () => {
  const btnLogout = document.getElementById('btn-logout')
  if (btnLogout) {
    btnLogout.addEventListener('click', e => {
      e.preventDefault()
      fazerLogout()
    })
  }
})
