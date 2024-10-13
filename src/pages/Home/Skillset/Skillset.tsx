import React from "react";
import * as S from "../style";
import { Grid } from "@mui/material";
import Image from "../../../components/Image";
import { Logos } from "../logos"; // Import the dynamic Logos object

interface SkillsetProps {
  [others: string]: any;
}

const categories = {
  Languages: ["Python", "R", "SQL", "Typescript", "HTML5", "CSS"],
  "General Data Science": [
    "Dask",
    "SciKit-Learn",
    "SciPy",
    "NetworkX",
    "Gephi",
    "Kedro",
  ],
  "AI & Machine Learning": [
    "RAPIDS",
    "Tensorflow",
    "HuggingFace",
    "OpenAI Gym",
    "Neptune",
    "Dagshub",
  ],
  "Data Visualisation Libraries": [
    "Tableau",
    "Superset",
    "Streamlit",
    "Matplotlib",
    "Plotly",
    "D3",
  ],
  "Cloud Services & Databases": [
    "Google Cloud",
    "AWS",
    "PostgreSQL",
    "ChromaDB",
    "Firebase",
    "MongoDB",
  ],
  "Backend Frameworks & Libraries": [
    "FASTAPI",
    "Django",
    "Pandera",
    "Prefect",
    "Airflow",
    "Celery",
  ],
  "Frontend Frameworks & Libraries": [
    "React",
    "Next",
    "MaterialUI",
    "Zustand",
    "Stripe",
  ],
  Others: ["Git", "GitLab CI", "Scrapy", "Datahub"],
};

function Skillset(props: SkillsetProps, ref: any) {
  return (
    <Grid
      {...props}
      ref={ref}
      container
      sx={{ padding: 10, backgroundColor: "white" }}
    >
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          Skills
        </S.TitleWrapper>
      </Grid>
      <Grid container display="flex" spacing={10}>
        {Object.keys(categories).map((category) => (
          <Grid item xs={6} key={category}>
            <S.SubTitleWrapper>{category}</S.SubTitleWrapper>
            <S.LogoWrapper>
              {categories[category as keyof typeof categories].map(
                (logoTitle: string) => (
                  <Image
                    key={logoTitle}
                    {...Logos[logoTitle as keyof typeof Logos]}
                  />
                ),
              )}
            </S.LogoWrapper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default React.forwardRef(Skillset);
