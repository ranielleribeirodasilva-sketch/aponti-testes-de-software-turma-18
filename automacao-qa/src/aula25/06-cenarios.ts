interface Cenario {
    id: number;
    nome: string;
    categoria: 'regressao' | 'ui_subjetivo' | 'fluxo_critico' | 'exploratorio';
}

const cenariosSistema: Cenario[] = [
    { id: 1, nome: "Login com sucesso com credenciais válidas", categoria: "fluxo_critico" },
    { id: 2, nome: "Verificar se a paleta de cores do banner está agradável", categoria: "ui_subjetivo" },
    { id: 3, nome: "Validação de formato de e-mail inválido no cadastro", categoria: "regressao" },
    { id: 4, nome: "Fluxo completo de checkout e pagamento via Pix", categoria: "fluxo_critico" },
    { id: 5, nome: "Teste de animação fluida do menu lateral mobile", categoria: "ui_subjetivo" },
    { id: 6, nome: "Cálculo correto do frete com base no CEP inserido", categoria: "regressao" },
    { id: 7, nome: "Exploração livre de bugs visuais em novos dispositivos", categoria: "exploratorio" },
    { id: 8, nome: "Atualização de estoque após a conclusão da compra", categoria: "regressao" }
];

let totalAutomatizaveis = 0;
console.log("=== RELATÓRIO DE CLASSIFICAÇÃO DE CENÁRIOS ===");

for (let i = 0; i < cenariosSistema.length; i++) {
    const cenario = cenariosSistema[i];
    if (cenario.categoria === "fluxo_critico" || cenario.categoria === "regressao") {
        totalAutomatizaveis++;
        console.log(`[✓ AUTOMATIZAR] Cenário ${cenario.id}: ${cenario.nome}`);
    } else {
        console.log(`[X NÃO AUTOMATIZAR] Cenário ${cenario.id}: ${cenario.nome}`);
    }
}

console.log(`\nTotal de cenários elegíveis para automação: ${totalAutomatizaveis} de ${cenariosSistema.length}`);