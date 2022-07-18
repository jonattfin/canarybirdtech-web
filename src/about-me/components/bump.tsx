import { Bump, BumpSvgProps } from "@nivo/bump";
import range from "lodash/range";
import shuffle from "lodash/shuffle";

interface Datum {
  x: number;
  y: number;
  extra: number;
}

const generateData = () => {
  const years = range(2011, 2023);
  const ranks = range(1, 7);

  const series = ranks.map((rank) => {
    return {
      id: `Serie ${rank}`,
      data: [] as Datum[],
    };
  });

  years.forEach((year) => {
    shuffle(ranks).forEach((rank, i) => {
      series[i].data.push({
        x: year,
        y: rank,
        extra: Math.random(),
      });
    });
  });

  return series;
};

const commonProps: BumpSvgProps<any, any> = {
  width: 900,
  height: 450,
  margin: { top: 40, right: 100, bottom: 40, left: 100 },
  data: generateData(),
};

export function CustomBump() {
  return <Bump {...commonProps} />;
}
