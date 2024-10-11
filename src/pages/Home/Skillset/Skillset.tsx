import React from "react";
import * as S from "./style";
import { Grid } from "@mui/material";
import * as Logo from "./logos";
import Image from "../../../components/Image";

export default function Skillset() {
  return (
    <Grid container sx={{ padding: 10, backgroundColor: "white" }}>
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          {" "}
          Skills{" "}
        </S.TitleWrapper>
      </Grid>
      <Grid container display="flex" spacing={10}>
        <Grid item xs={6}>
          <S.SubTitleWrapper> Languages</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://www.python.org/"
              title="Python"
              src={Logo.PythonLogo}
              height="75px"
            />
            <Image
              url="https://www.r-project.org/"
              title="R"
              src={Logo.RLogo}
              height="80px"
            />
            <Image
              url="https://developer.mozilla.org/en-US/docs/Web/CSS"
              title="SQL"
              src={Logo.SQLLogo}
              height="75px"
            />
            <Image
              url="https://www.typescriptlang.org/"
              title="Typescript"
              src={Logo.TSLogo}
              height="70px"
            />
            <Image
              url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              title="HTML5"
              src={Logo.HTMLLogo}
              height="70px"
            />
            <Image
              url="https://developer.mozilla.org/en-US/docs/Web/CSS"
              title="CSS"
              src={Logo.CSSLogo}
              height="90px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>General Data Science</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://pandas.pydata.org/"
              title="Pandas"
              src={Logo.PandasLogo}
              height="75px"
            />
            <Image
              url="https://www.dask.org/"
              title="Dask"
              src={Logo.DaskLogo}
              height="75px"
            />
            <Image
              url="https://scikit-learn.org/"
              title="SciKit-Learn"
              src={Logo.ScikitLogo}
              width="80px"
            />
            <Image
              url="https://scipy.org/"
              title="SciPy"
              src={Logo.ScipyLogo}
              height="75px"
            />
            <Image
              url="https://networkx.org/"
              title="NetworkX"
              src={Logo.NetworkXLogo}
              height="70px"
            />
            <Image
              url="https://gephi.org/"
              title="Gephi"
              src={Logo.GephiLogo}
              height="70px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>AI & Machine Learning</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://rapids.ai/"
              title="RAPIDS"
              src={Logo.RapidsLogo}
              width="70px"
            />
            <Image
              url="https://pytorch.org/"
              title="Pytorch"
              src={Logo.PytorchLogo}
              height="65px"
            />
            <Image
              url="https://www.tensorflow.org/"
              title="Tensorflow"
              src={Logo.TensorflowLogo}
              height="65px"
            />
            <Image
              url="https://gymnasium.farama.org/#"
              title="OpenAI Gym"
              src={Logo.GymnasiumLogo}
              height="65px"
            />
            <Image
              url="https://neptune.ai/"
              title="Neptune"
              src={Logo.NeptuneLogo}
              height="90px"
            />
            <Image
              url="https://dagshub.com/"
              title="Dagshub"
              src={Logo.DagshubLogo}
              height="80px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>Data Visualisation Libraries</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://www.tableau.com/"
              title="Tableau"
              src={Logo.TableauLogo}
              height="60px"
            />
            <Image
              url="https://superset.apache.org/"
              title="Superset"
              src={Logo.SupersetLogo}
              height="35px"
            />
            <Image
              url="https://streamlit.io/"
              title="Streamlit"
              src={Logo.StreamlitLogo}
              height="70px"
            />
            <Image
              url="https://matplotlib.org/"
              title="Matplotlib"
              src={Logo.MatplotlibLogo}
              height="65px"
            />
            <Image
              url="https://plotly.com/"
              title="Plotly"
              src={Logo.PlotlyLogo}
              height="60px"
            />
            <Image
              url="https://plotly.com/"
              title="D3"
              src={Logo.D3Logo}
              height="60px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>Cloud Services & Databases</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://cloud.google.com/?hl=en"
              title="Google Cloud"
              src={Logo.GcloudLogo}
              height="50px"
            />
            <Image
              url="https://aws.amazon.com/"
              title="AWS"
              src={Logo.AWSLogo}
              height="50px"
            />
            <Image
              url="https://www.postgresql.org/"
              title="PostgreSQL"
              src={Logo.PostgresLogo}
              height="60px"
            />
            <Image
              url="https://www.trychroma.com/"
              title="ChromaDB"
              src={Logo.ChromaDBLogo}
              height="50px"
            />
            <Image
              url="https://firebase.google.com/"
              title="Firebase"
              src={Logo.FirebaseLogo}
              height="60px"
            />
            <Image
              url="https://www.mongodb.com/"
              title="MongoDB"
              src={Logo.MongoDBLogo}
              height="80px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>Backend Frameworks & Libraries</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://fastapi.tiangolo.com/"
              title="FASTAPI"
              src={Logo.FastAPILogo}
              height="60px"
            />
            <Image
              url="https://www.djangoproject.com/"
              title="Django"
              src={Logo.DjangoLogo}
              height="60px"
            />
            <Image
              url="https://pandera.readthedocs.io/en/stable/index.html"
              title="Pandera"
              src={Logo.PanderaLogo}
              height="70px"
            />
            <Image
              url="https://www.prefect.io"
              title="Prefect"
              src={Logo.PrefectLogo}
              height="75px"
            />
            <Image
              url="https://airflow.apache.org/"
              title="Airflow"
              src={Logo.AirflowLogo}
              height="60px"
            />
            <Image
              url="https://www.fullstackpython.com/celery.html"
              title="Celery"
              src={Logo.CeleryLogo}
              height="80px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>Frontend Frameworks & Libraries</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://react.dev/"
              title="React"
              src={Logo.ReactLogo}
              height="65px"
            />
            <Image
              url="https://nextjs.org/"
              title="Next"
              src={Logo.NextLogo}
              height="65px"
            />
            <Image
              url="https://mui.com/"
              title="MaterialUI"
              src={Logo.MUILogo}
              height="70px"
            />
            <Image
              url="https://zustand.docs.pmnd.rs/getting-started/introduction"
              title="Zustand"
              src={Logo.ZustandLogo}
              height="80px"
            />
            <Image
              url="https://stripe.com/en-sg"
              title="Stripe"
              src={Logo.StripeLogo}
              height="70px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}>
          <S.SubTitleWrapper>Others</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://git-scm.com/"
              title="Git"
              src={Logo.GitLogo}
              height="70px"
            />
            <Image
              url="https://about.gitlab.com/"
              title="GitLab CI"
              src={Logo.GitlabLogo}
              height="70px"
            />
            <Image
              url="https://scrapy.org/"
              title="Scrapy"
              src={Logo.ScrapyLogo}
              height="75px"
            />
          </S.LogoWrapper>
        </Grid>
      </Grid>
    </Grid>
  );
}
