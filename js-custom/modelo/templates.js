function template_modal(id) {
    return ` <p>
     <div class='form-group'>
      <h2>Numero da Rifa: ${id} </h2>
      <form id="form-view">
   
            <label for=''>Nome</label>
      <input type='text' name='nameview' id='nameview' class='form-control' placeholder='' aria-describedby='helpId' required>
      <small id='helpId' class='text-muted'>Nome completo</small>
      <p>
      <label for=''>Telefone</label>
       <input type='number' class='form-control' name='telefoneview' id='telefoneview' aria-describedby="telefoneview" placeholder='(XX)XXXXX-XXXX' maxlength="12" required>
       <small id='helpId' class='form-text text-muted'>Telefone (XX)XXXXX-XXXX</small></div>
       </p>
       <button type='button' class='btn btn-primary' id='salvar-view'>Salvar</button>  
       </form>
       `
}

function template_edit(rifa) {
    return `              
    <p>
     <div class='form-group'>
         <h1>Alterando a Rifa : ${rifa.id+1}</h1>
         <h2>Numero da Rifa: ${rifa.id+1} </h2>
         <form id="form-view">
             <label for=''>Nome</label>
             <input type='text' name='nameview' id='nameview' class='form-control' placeholder='${rifa.nome}'
                 aria-describedby='helpId'>
             <small id='helpId' class='text-muted'>Nome completo</small>
             <p>
                 <label for=''>Telefone</label>
                 <input type='number' class='form-control' name='telefoneview' id='telefoneview'
                 aria-describedby="telefoneview" placeholder='${rifa.telefone}' maxlength="12" required >
                 <small id='helpId' class='form-text text-muted'>Telefone (XX)XXXXX-XXXX</small>
     </div>
 </p>
 <button type='button' class='btn btn-primary' id='salvar-view'>Salvar</button>
 </form>
       `


}

function template_editcard(rifa) {
    return ` 
    <div class="card" style="width: 10rem;">
    <div class="card-body text-center">
        <h5 class="card-title" id="id"> ${rifa.id+1} </h5>
        <p class="card-text" id="nome">${rifa.nome} </p>
        <p class="card-text" id="telefone">${rifa.telefone}</p>
    </div>
</div>
`
}

function template_pesquisa_nome() {
    return `                 
    <p>
    <div class='form-group'>
        <h1>Pesquisar por Nome</h1>
        <form id="form-pesquisa-nome">
            <label for=''>Nome</label>
            <input type='text' name='namepesquisa' id='namepesquisa' class='form-control'
                placeholder='' aria-describedby='helpId'>
            <small id='helpId' class='text-muted'></small>

    </div>
</p>
<button type='button' class='btn btn-primary' id='salvar-pesquisar-nome'>Pesquisar</button>
</form>
<div class='resultado'>
    <h1>Resultado</h1>
    <ul id="mensagem-resultado">
    </ul>
</div>`
}

function template_pesquisa_numero() {
    return `                 
    <p>
    <div class='form-group'>
        <h1>Pesquisar por Numero</h1>
        <form id="form-pesquisa-number">
            <label for=''>Numero</label>
            <input type='text' name='numberpesquisa' id='numberpesquisa' class='form-control'
                placeholder='' aria-describedby='helpId'>
            <small id='helpId' class='text-muted'></small>

    </div>
</p>
<button type='button' class='btn btn-primary' id='salvar-pesquisar-number'>Pesquisar</button>
</form>
<div class='resultado'>
    <h1>Resultado</h1>
    <ul id="mensagem-resultado">
    </ul>
</div>`
}


function template_relatorio_grafico() {
    return `
    <canvas id="relatorioDisponivel" width="600" height="400"></canvas>
    
    `
}

function template_relatorio_disponivel() {
    return `                 
    <p>
    <div class='form-group'>
        <h1>Rifas Disponiveis</h1>

<div class='resultado'>
    <ul id="mensagem-resultado">
    </ul>
</div>
</div>`
}

function template_relatorio_indisponivel() {
    return `                 
    <p>
    <div class='form-group'>
        <h1>Rifas Vendidas</h1>

<div class='resultado'>
    <ul id="mensagem-resultado">
    </ul>
</div>
</div>
`
}

function template_sorteio(sorteado) {
    return `                 
    <p>
    <div class='form-group'>
        <h1>Numero Sorteado é ${sorteado}</h1>
        </div>
`
}