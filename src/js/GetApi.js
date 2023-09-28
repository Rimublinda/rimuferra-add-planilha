const title = document.querySelector("#title");
const linkTheApi = document.querySelector("#link-api");
const checkTitle = document.querySelector("#check-title");
const alert = document.querySelector(".alert-situation");

function modAlerta(tipo, error) {
    if (tipo == "sucesso") {
        alert.innerHTML = "Você adicionou com sucesso seu elemento na planilha";
        alert.classList.add("alert");
        alert.classList.add("alert-success");
        alert.classList.remove("hidde");
    } else {
        alert.innerHTML = error;
        alert.classList.add("alert");
        alert.classList.add("alert-warning");
        alert.classList.remove("hidde");
    }
    setTimeout(() => {
        alert.classList.add("hidde");
    }, 3000)
}


async function GetApi(text, type) {
    let listaSimples = [];
    let listaMultiplas = [];

    switch (type) {
        case 1:
            if (checkTitle.checked == false) {
                let VeriTitle = title.value != '' ? title.value : 'Sem titulo';
                listaSimples.push(`t:${VeriTitle}`);
                listaSimples.push(text);
                listaSimples.forEach(async (el) => {
                    const data = { listas: el };
                    const response = await fetch(linkTheApi.value, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }).then((res) => {
                        modAlerta("sucesso")
                    }).catch((res) => {
                        modAlerta("error", "Ocorreu algum error.")
                    });
                });
            } else {
                const data = { listas: text };
                const response = await fetch(linkTheApi.value, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then((res) => {
                    modAlerta("sucesso")
                }).catch((res) => {
                    modAlerta("error", "Ocorreu algum error.")
                });
            }
            break;

        case 2:
            if (checkTitle.checked == false) {
                let VeriTitle = title.value != '' ? title.value : 'Sem titulo';
                listaSimples.push(`t:${VeriTitle}`);
                text.forEach(el => {
                    listaMultiplas.push(el);
                });
                listaMultiplas.forEach(async (el) => {
                    const data = { listas: el };
                    const response = await fetch(linkTheApi.value, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }).then((res) => {
                        modAlerta("sucesso")
                    }).catch((res) => {
                        modAlerta("error", "Ocorreu algum error.")
                    });
                });
            } else {
                text.forEach(async (el) => {
                    const data = { listas: el };
                    const response = await fetch(linkTheApi.value, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }).then((res) => {
                        modAlerta("sucesso")
                    }).catch((res) => {
                        modAlerta("error", "Ocorreu algum error.")
                    });
                });
            }
            break
        default:
            break;
    }
}

export default { GetApi, modAlerta };