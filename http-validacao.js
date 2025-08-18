function extraiLinks (arrLinks) {
return arrLinks.map((objetoLink) => Object.values (objetoLink).join())
}

async function checaStatus (listaURLs) {
return listaURLs.map((url) => {
const response = await fetch(url)
return response.status;
})
}

export default function listaValidada (listaDeLinks) {
const links
}