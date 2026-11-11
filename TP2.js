// TP2 - Procesamiento de flota con map, filter y reduce

let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto",   km: 150 },
  { patente: "XY987ZW", velocidad: 95,  tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto",   km: 80  },
  { patente: "QR789JK", velocidad: 88,  tipo: "moto",   km: 45  },
  { patente: "ST012LM", velocidad: 125, tipo: "auto",   km: 200 }
];

const LIMITE_VELOCIDAD = 110;
const LIMITE_MULTA_LEVE = 130;
const MULTA_LEVE = 5000;
const MULTA_GRAVE = 10000;

// ---------- Parte 1: Calcular multas con map() ----------

const calcularMonto = (velocidad) => {
  if (velocidad <= LIMITE_VELOCIDAD) return 0;
  if (velocidad <= LIMITE_MULTA_LEVE) return MULTA_LEVE;
  return MULTA_GRAVE;
};

const reporteMultas = registros.map((vehiculo) => ({
  patente: vehiculo.patente,
  monto: calcularMonto(vehiculo.velocidad)
}));

console.log("Reporte de multas:");
console.log(reporteMultas);

// ---------- Parte 2: Filtrar infractores con filter() ----------

const infractores = registros.filter(
  (vehiculo) => vehiculo.velocidad > LIMITE_VELOCIDAD
);

const patentesInfractoras = infractores.map((vehiculo) => vehiculo.patente);

console.log(`Cantidad de infractores: ${infractores.length}`);
console.log("Patentes infractoras:", patentesInfractoras);

// ---------- Parte 3: Estadísticas con reduce() ----------

const totalKm = registros.reduce(
  (acumulado, vehiculo) => acumulado + vehiculo.km,
  0
);

const recaudacion = reporteMultas.reduce(
  (acumulado, multa) => acumulado + multa.monto,
  0
);

console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);
