api_key = 'b05511b91b88e82a6694f254b03d9c8c';

async function convertir(params) {
  
  const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${api_key}`);
  const data = await response.json();
  return data;
}

export default function Inicio() {
  return (
    <div>
      <h1>Inicio</h1>
      <p>Tasa de cambio para USD: {echangeRates['rates']['USD']}</p>

      <p>Clave de acceso: {clave_acceso}</p>
      <p>API URL: https://api.exchangeratesapi.io/v1/latest?access_key={clave_acceso}</p>
      <p>Respuesta JSON: {JSON.stringify(echangeRates)}</p>
      <p>Respuesta JSON (USD): {echangeRates['rates']['USD']}</p>
    </div>
  );
}