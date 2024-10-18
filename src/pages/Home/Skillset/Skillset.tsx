import React from "react";
import * as SM from "../style";
import * as S from "./style";
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
    <S.SkillsetContainer {...props} ref={ref} container>
      <Grid container>
        <SM.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          Skills
        </SM.TitleWrapper>
      </Grid>
      <Grid container display="flex" spacing={5}>
        {Object.keys(categories).map((category) => (
          <Grid item xs={12} md={6} key={category}>
            <SM.SubTitleWrapper>{category}</SM.SubTitleWrapper>
            <SM.LogoWrapper>
              {categories[category as keyof typeof categories].map(
                (logoTitle: string) => (
                  <Image
                    key={logoTitle}
                    {...Logos[logoTitle as keyof typeof Logos]}
                  />
                ),
              )}
            </SM.LogoWrapper>
          </Grid>
        ))}
      </Grid>
    </S.SkillsetContainer>
  );
}

export default React.forwardRef(Skillset);
