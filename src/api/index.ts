import range from "lodash/range";
import { IProject } from "./interfaces";

export function fetchProjects(): IProject[] {
  return [
    {
      title: "SimplyWall.St Clone",
      summaryText:
        "At Simply Wall St, our mission is to empower every retail investor in the world to make the best decisions possible.",

      webUrl: "https://simplywall.st",
      imageUrl: "/stock.jpg",

      frontend: {
        webUrl: "https://simplywallst-clone.vercel.app",
        githubUrl: "https://github.com/jonattfin/simplywallst-clone",
        sonarUrl:
          "https://sonarcloud.io/summary/new_code?id=jonattfin_simplywallst-clone",
        sonarImageUrl:
          "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_simplywallst-clone&metric=alert_status",
        technologies: [
          "https://nextjs.org",
          "https://storybook.js.org",
          "https://mui.com",
          "https://nivo.rocks",
          "https://www.apollographql.com",
          "https://vercel.com",
        ],
      },
      backend: {
        webUrl: "https://simplywallst.herokuapp.com/graphql",
        githubUrl: "https://github.com/jonattfin/simplywallst-clone-api",
        sonarUrl:
          "https://sonarcloud.io/project/overview?id=jonattfin_simplywallst-clone-api",
        sonarImageUrl:
          "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_simplywallst-clone-api&metric=alert_status",
        technologies: [
          "https://nestjs.com",
          "https://www.apollographql.com",
          "https://heroku.com",
        ],
      },
    },
    {
      title: "Ecosia.org Clone",
      summaryText: `Ecosia is a search engine based in Berlin, Germany. It donates 100% of its revenue to nonprofit organizations focusing on reforestation.
        Ecosia considers itself a social business, claiming to be CO2-negative, and supports full financial transparency and protects the privacy of its users.`,
      webUrl: "https://ecosia.org",
      imageUrl: "/forrest.jpg",

      frontend: {
        webUrl: "https://ecosia-clone.vercel.app",
        githubUrl: "https://github.com/jonattfin/ecosia-clone-web",
        sonarUrl:
          "https://sonarcloud.io/summary/new_code?id=jonattfin_ecosia-clone2",
        sonarImageUrl:
          "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_simplywallst-clone&metric=alert_status",

        technologies: [
          "https://nextjs.org",
          "https://storybook.js.org",
          "https://rxjs.dev",
          "https://mui.com",
          "https://nivo.rocks",
          "https://react-query-v3.tanstack.com",
          "https://jestjs.io",
          "https://www.cypress.io",
          "https://vercel.com",
        ],
      },
      backend: {
        webUrl: "https://ecosia-clone.herokuapp.com/api/",
        githubUrl: "https://github.com/jonattfin/ecosia-clone-api",
        sonarUrl:
          "https://sonarcloud.io/project/overview?id=jonattfin_ecosia-clone-nestjs",
        sonarImageUrl:
          "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_ecosia-clone-nestjs&metric=alert_status",
        technologies: [
          "https://nestjs.com",
          "https://typeorm.io",
          "https://heroku.com",
        ],
      },
    },
    {
      title: "Pulse.eco Clone",

      webUrl: "https://pulse.eco",
      imageUrl: "/iot.jpg",
      summaryText: `Pulse.eco is a crowdsourcing platform, which gathers and presents environmental data. Our network of sensor installations and other third-party sources gathers the data and translates them into visual and easy to understand information.`,

      frontend: {
        webUrl: "https://pulse-clone.vercel.app",

        githubUrl: "https://github.com/jonattfin/pulse-clone-web",
        sonarUrl:
          "https://sonarcloud.io/project/overview?id=jonattfin_pulse-clone-web",
        sonarImageUrl:
          "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_pulse-clone-web&metric=alert_status",
        technologies: [
          "https://nextjs.org",
          "https://mui.com",
          "https://react-leaflet.js.org",
          "https://nivo.rocks",
          "https://react-query-v3.tanstack.com",
          "https://vercel.com",
        ],
      },

      backend: {
        webUrl: "https://pulse-clone.herokuapp.com/api/",
        githubUrl: "https://github.com/jonattfin/pulse-clone-api",
        sonarUrl:
          "https://sonarcloud.io/project/overview?id=jonattfin_pulse-clone-api",
        sonarImageUrl:
          "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_pulse-clone-api&metric=alert_status",
        technologies: ["https://nestjs.com", "https://heroku.com"],
      },
    },
  ];
}

interface Datum {
  x: number;
  y: number;
  extra: number;
}

export const fetchTechStack = () => {
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

  const ranksValues = getRanksValues();

  years.forEach((year) => {
    ranks.forEach((rank, i) => {
      series[i].data.push({
        x: year,
        y: getRankValue(ranksValues, year.toString(), rank),
        extra: Math.random(),
      });
    });
  });

  return series;
};

enum Technologies {
  JavaScript,
  React,
  Nest,
  Jest,
  Cypress,
  NETCore,
  MicrosoftAzure,
  Kubernetes,
  GraphQL,
}

function getRankValue(rankValues: any, year: string, technology: number): any {
  if (rankValues[year] && rankValues[year][technology]) {
    return rankValues[year][technology];
  }

  return 0;
}

function getRanksValues(): any {
  return {
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
      [Technologies.GraphQL]: 2.5,
    },
  };
}
