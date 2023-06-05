<template>
    <div class="page">
      <section class="goal">
        <h2>Cíl projektu</h2>
        <p>
          Cílem tohoto projektu bylo zdokonalit dovednosti v práci s JavaScriptem, porozumět a naučit se pracovat s frameworkem Vue.js.
          Dále byla myšlenka začít implementovat užitečnou funkcionalitu související s komunikací s lidmi.
        </p>
      </section>
  
      <section>
        <h2>Popis funkcionality</h2>
        <ul>
          <li>Na stránce Kontaktů můžete přidávat lidi, se kterými chcete komunikovat. Také můžete označovat poslední datum komunikace s danou osobou. Pokud je barva oranžová nebo červená, doporučuje se s touto osobou komunikovat.</li>
          <li>Na stránce Kategorií můžete přidávat kategorie, které pak můžete přiřazovat kontaktům pro pohodlnost.</li>
          <li>Můžete kreslit a uložit obrázek.</li>
          <li>Můžete poslouchat hudbu.</li>
        </ul>
  
        <div>
          <h3>Stránka Dokumentace</h3>
          <ul class="advanced-selector">
            <li>Popisuje celý projekt.</li>
            <li>Také používá složité selektory.</li>
            <li>Napsáno v čistém HTML pro bod "správné použití sémantických značek".</li>
            <li><div class="bottom-button">2D transformace</div></li>
          </ul>
        </div>
  
        <div>
          <h3>Stránka Přihlášení</h3>
          <ul class="advanced-selector">
            <li>Zobrazuje práci s formuláři a validaci polí.</li>
          </ul>
        </div>
  
        <div>
          <h3>Stránka Hudby</h3>
          <ul>
            <li>Použití mediálního API (video, zvuk) a přehrávání pomocí JavaScriptu.</li>
          </ul>
        </div>
  
        <div>
          <h3>Stránka Dashboard</h3>
          <ul class="advanced-selector">
            <li>Práce se SVG pomocí JavaScriptu.</li>
          </ul>
        </div>
  
        <div>
          <h3>Stránka Kategorie Kontaktů</h3>
          <ul class="advanced-selector">
            <li>Použití komponentní knihovny pro vykreslování tabulky (Element-UI).</li>
            <li>Použití rozšířeného JavaScriptového API (použití LocalStorage).</li>
            <li>Funkční historie.</li>
            <li>CSS3 přechody/animační efekty</li>
          </ul>
        </div>
  
        <div>
          <h3>Stránka Seznamu Kontaktů</h3>
          <ul class="advanced-selector">
            <li>Použití komponentní knihovny pro vykreslování tabulky (Element-UI).</li>
            <li>Použití rozšířeného JavaScriptového API (použití LocalStorage).</li>
            <li>Modální okna.</li>
            <li>Práce s daty.</li>
          </ul>
        </div>


        <div>
            <h3>Další (KÓD)</h3>
            <ul>
                <li>V adresáři services - ukázka, jak mohu použít API. Tuto funkci můžete zavolat ve svém kódu pomocí try { Tady můžete použít async await pro čekání na odpověď. } catch () {}</li>
                <li>Vuex</li>
            </ul>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  </style>
  
  
  <style scoped>
  .page {
    margin: 20px;
  }
  
  .goal {
    margin-bottom: 40px;
  }
  
  .goal h2 {
    font-weight: bold;
  }
  
  .advanced-selector {
    color: #ff6600;
    font-weight: bold;
  }
  
  section:not(.goal) {
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  section + section {
    margin-top: 20px;
  }
  
  .advanced-selector:first-child {
    text-decoration: underline;
  }
  
  .advanced-selector li:nth-child(2n) {
    color: blue;
  }
  
  .advanced-selector li:first-of-type {
    font-weight: bold;
  }
  
  .page {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  .advanced-selector {
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    transition: color 0.3s;
  }

  .bottom-button {
    margin-left: 70px;
    width: 80px;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #4CAF50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    transition: transform 0.5s;
    }

.bottom-button:hover {
  transform: translateX(-50%) rotate(360deg);
}
  
  </style>
  