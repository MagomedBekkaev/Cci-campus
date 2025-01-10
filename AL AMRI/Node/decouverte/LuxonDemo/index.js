const {DateTime} = require("luxon")

const feteNationale = DateTime.fromObject({year: 2023, month: 7, day: 14})
console.log(`Fete nationale française : ${feteNationale.toLocaleString(DateTime.DATE_FULL)}`);

// =========================================

const formattedDate = feteNationale.toLocaleString({
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
});
console.log(`Fete nationale française formatée: ${formattedDate}`);

// ==========================================

const debut = DateTime.fromObject({ year: 202, month: 1, day: 1 });
const fin = DateTime.fromObject({ year: 2023, month: 7, day: 14 });
const intervalle = fin.diff(debut, ['months', 'days']);
console.log(`Intervalle entre le 1er janvier et le 14 juillet :
${intervalle.toHuman()}`);
