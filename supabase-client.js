// supabase-client.js
// Este arquivo centraliza a conexão com o Supabase para todo o projeto.

// 1. Importa a função necessária da biblioteca do Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

// 2. SUAS CREDENCIAIS FICAM AQUI, EM UM ÚNICO LUGAR!
const SUPABASE_URL = 'https://quubrjkzddxgmrxlhsqv.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1dWJyamt6ZGR4Z21yeGxoc3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NTAyNjIsImV4cCI6MjA2NzUyNjI2Mn0.Q-YpUje7wt8sHlGmuEvhnH2txgiD3mI7UuzIr9Wniyw'

// 3. Cria e exporta o cliente Supabase.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
