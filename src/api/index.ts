import range from "lodash/range";

interface Datum {
  x: number;
  y: number;
  extra: number;
}

export const generateData = () => {
  enum Technologies {
    JavaScript,
    React,
    Nest,
    Jest,
    Cypress,
    NETCore,
    MicrosoftAzure,
    Kubernetes,
  }

  const years = range(2015, 2023);
  const ranks = range(
    0,
    Object.keys(Technologies).filter((x) => isNaN(parseInt(x))).length
  );

  const series = ranks.map((rank) => {
    return {
      id: Technologies[rank],
      data: [] as Datum[],
    };
  });

  years.forEach((year) => {
    ranks.forEach((rank, i) => {
      series[i].data.push({
        x: year,
        y: getRankValue(year.toString(), rank),
        extra: Math.random(),
      });
    });
  });

  return series;

  function getRankValue(year: string, technology: number): any {
    const obj: any = {
      "2015": {
        [Technologies.JavaScript]: 2,
        [Technologies.React]: 3,
        [Technologies.Jest]: 3,
      },
      "2016": {
        [Technologies.JavaScript]: 3,
        [Technologies.React]: 5,
        [Technologies.Jest]: 3,
      },
      "2017": {
        [Technologies.JavaScript]: 4,
        [Technologies.React]: 7,
        [Technologies.Jest]: 4,
      },
      "2018": {
        [Technologies.JavaScript]: 4,
        [Technologies.React]: 5,
        [Technologies.Jest]: 3,
      },
      "2019": {
        [Technologies.React]: 4,
        [Technologies.JavaScript]: 4,
        [Technologies.Jest]: 4,
        [Technologies.NETCore]: 3,
        [Technologies.Kubernetes]: 2,
        [Technologies.MicrosoftAzure]: 3,
      },
      "2020": {
        [Technologies.React]: 4,
        [Technologies.JavaScript]: 4,
        [Technologies.Jest]: 4,
        [Technologies.NETCore]: 4,
        [Technologies.Kubernetes]: 3,
        [Technologies.MicrosoftAzure]: 4,
      },
      "2021": {
        [Technologies.React]: 5,
        [Technologies.Cypress]: 5,
        [Technologies.JavaScript]: 5,
        [Technologies.NETCore]: 5,
        [Technologies.Kubernetes]: 4,
        [Technologies.MicrosoftAzure]: 5,
      },
      "2022": {
        [Technologies.JavaScript]: 5,
        [Technologies.React]: 7,
        [Technologies.Cypress]: 4.5,
        [Technologies.Jest]: 4,
        [Technologies.Nest]: 3,
        [Technologies.NETCore]: 2,
        [Technologies.MicrosoftAzure]: 1,
      },
    };

    if (obj[year] && obj[year][technology]) {
      return obj[year][technology];
    }

    return 0;
  }
};