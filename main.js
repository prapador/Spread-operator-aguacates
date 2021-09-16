/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const base_url = "https://platzi-avo.vercel.app";
const url_api = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector("#app");



const formatPrice = (precio) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "GBP",
  }).format(precio);
  return newPrice;
};

const miFuncion = async (url_api) => {
  let response = await fetch(url_api);
  try {
    const responseJson = await response.json();
    const allItems = [];

    responseJson.data.forEach((item) => {
      // create image
      const image = document.createElement("img");
      image.src = `${base_url}${item.image}`;
      // create title
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "grande";
      // create price
      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });
    //UTILIZAMOS OPERADOR DE PROPAGACIÓN PARA INTEGRAR TODO A LA VEZ
    appNode.append(...allItems);
  } catch (e) {
    console.log(e);
  }
};

miFuncion(url_api);
