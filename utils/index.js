/**
 * Given a UTC date, returns date in Spanish
 * @param {String} date
 * @returns String in format [dayNumber] de [month] de [year]
 */

exports.UTCtoSpanishDateParser = date => {
  const [dayStr, month, dayNum, year] = new Date(date)
    .toDateString()
    .split(" ");

  const monthDictionary = {
    Jan: "Enero",
    Feb: "Febrero",
    Mar: "Marzo",
    Apr: "Abril",
    May: "Mayo",
    Jun: "Junio",
    Jul: "Julio",
    Aug: "Agosto",
    Sep: "Septiembre",
    Oct: "Octubre",
    Nov: "Noviembre",
    Dec: "Diciembre"
  };

  return `${dayNum} de ${monthDictionary[month]} de ${year}`;
};
