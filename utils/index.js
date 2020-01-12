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

/**
 * Given an array of tagged articles, returns an array of the top 10
 * most ocurring tags with their respective name and url in desc order.
 * @param {Object[]} arts Object array of articles to test
 * @returns Array of top 10 most ocurring tags in format {name, count, url}
 */

exports.tagSort = arts => {
  const tagCount = {};
  const tagUrls = {};

  //count tags, save url for given tag
  arts.forEach(article => {
    if (article.taxonomy.tags.length) {
      let tagArr = article.taxonomy.tags;
      tagArr.forEach(tag => {
        tagCount[tag.text] = tagCount[tag.text]
          ? (tagCount[tag.text] += 1)
          : (tagCount[tag.text] = 1);
        tagUrls[tag.text] = tag.slug;
      });
    }
  });

  const sortedCountDesc = Object.values(tagCount).sort((a, b) => b - a);

  const getKeyByValue = (object, value) => {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  };

  const sortedTags = [];
  // build sorted tag array with data required
  sortedCountDesc.forEach(int => {
    sortedTags.push({
      name: getKeyByValue(tagCount, int),
      count: int,
      url: tagUrls[getKeyByValue(tagCount, int)]
    });
    delete tagCount[getKeyByValue(tagCount, int)];
  });

  //return only the top 10
  return sortedTags.slice(0, 10);
};
