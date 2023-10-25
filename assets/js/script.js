let tituloAlterado = document.getElementById ('titulo');
tituloAlterado.innerText = 'Criando título com JavaScript';

let ancoraAlterado = document.querySelector ('a');
ancoraAlterado.innerText = 'Proz Educação';

let ulAlterado = document.querySelector ('ul');
ulAlterado.innerHTML = `
    <li>lista não ordenada 1</li>
    <li>lista não ordenada 2</li>
    <li>lista não ordenada 3</li>
`;

let olAlterado = document.getElementById ('lista-ordenada');
olAlterado.innerHTML = `
<li>lista ordenada 1 <a href="https://github.com/Lucc-Minerva">link 1</a></li>
<li>lista ordenada 2 <a href="https://www.linkedin.com/in/lucas-t-goncalves/">link 2</a></li>
<li>lista ordenada 3 <a href="https://www.dio.me/users/lucaston2323">link 3</a></li>
`;