import CSSLogo from "../../assets/logos/programming_languages/css3.png";
import HTMLLogo from "../../assets/logos/programming_languages/html5.png";
import SQLLogo from "../../assets/logos/programming_languages/sql.png";
import PythonLogo from "../../assets/logos/programming_languages/python.png";
import RLogo from "../../assets/logos/programming_languages/r.png";
import TSLogo from "../../assets/logos/programming_languages/ts.png";

import DaskLogo from "../../assets/logos/data_science/dask.png";
import GephiLogo from "../../assets/logos/data_science/gephi.png";
import ScikitLogo from "../../assets/logos/data_science/scikit.png";
import ScipyLogo from "../../assets/logos/data_science/scipy.png";
import NetworkXLogo from "../../assets/logos/data_science/networkx.png";
import PandasLogo from "../../assets/logos/data_science/pandas.png";
import SpacyLogo from "../../assets/logos/data_science/spacy.png";

import AWSLogo from "../../assets/logos/cloud_databases/aws.png";
import GcloudLogo from "../../assets/logos/cloud_databases/gcloud.png";
import MongoDBLogo from "../../assets/logos/cloud_databases/mongodb.png";
import PostgresLogo from "../../assets/logos/cloud_databases/postgres.png";
import FirebaseLogo from "../../assets/logos/cloud_databases/firebase.png";
import ChromaDBLogo from "../../assets/logos/cloud_databases/chroma.png";

import PytorchLogo from "../../assets/logos/ai_machine_learning/pytorch.png";
import DagshubLogo from "../../assets/logos/ai_machine_learning/dagshub.png";
import TensorflowLogo from "../../assets/logos/ai_machine_learning/tensorflow.png";
import NeptuneLogo from "../../assets/logos/ai_machine_learning/neptune.png";
import GymnasiumLogo from "../../assets/logos/ai_machine_learning/gymnasium.png";
import RapidsLogo from "../../assets/logos/ai_machine_learning/nvidiarapids.png";

import D3Logo from "../../assets/logos/visualisation/d3.png";
import StreamlitLogo from "../../assets/logos/visualisation/streamlit.png";
import MatplotlibLogo from "../../assets/logos/visualisation/matplotlib.png";
import PlotlyLogo from "../../assets/logos/visualisation/plotly.png";
import SupersetLogo from "../../assets/logos/visualisation/superset.png";
import TableauLogo from "../../assets/logos/visualisation/tableau.png";

import ReactLogo from "../../assets/logos/frontend_frameworks/react.png";
import NextLogo from "../../assets/logos/frontend_frameworks/next.png";
import ZustandLogo from "../../assets/logos/frontend_frameworks/zustand.png";
import StripeLogo from "../../assets/logos/frontend_frameworks/stripe.png";
import MUILogo from "../../assets/logos/frontend_frameworks/mui.png";

import FastAPILogo from "../../assets/logos/backend_frameworks/fastapi.png";
import CeleryLogo from "../../assets/logos/backend_frameworks/celery.png";
import DjangoLogo from "../../assets/logos/backend_frameworks/django.png";
import AirflowLogo from "../../assets/logos/backend_frameworks/airflow.png";
import PrefectLogo from "../../assets/logos/backend_frameworks/prefect.png";
import PanderaLogo from "../../assets/logos/backend_frameworks/pandera.png";

import GitlabLogo from "../../assets/logos/others/gitlab.png";
import ScrapyLogo from "../../assets/logos/others/scrapy.png";
import GitLogo from "../../assets/logos/others/git.png";

import VertexAILogo from "../../assets/logos/misc/vertex.png";

export const Logos: {
  [key: string]: { url: string; title: string; src: any; height: string };
} = {
  Python: {
    url: "https://www.python.org/",
    title: "Python",
    src: PythonLogo,
    height: "75px",
  },
  R: {
    url: "https://www.r-project.org/",
    title: "R",
    src: RLogo,
    height: "60px",
  },
  SQL: {
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "SQL",
    src: SQLLogo,
    height: "75px",
  },
  Typescript: {
    url: "https://www.typescriptlang.org/",
    title: "Typescript",
    src: TSLogo,
    height: "70px",
  },
  HTML5: {
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    title: "HTML5",
    src: HTMLLogo,
    height: "70px",
  },
  CSS: {
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS",
    src: CSSLogo,
    height: "90px",
  },
  Pandas: {
    url: "https://pandas.pydata.org/",
    title: "Pandas",
    src: PandasLogo,
    height: "75px",
  },
  Spacy: {
    url: "https://spacy.io/",
    title: "SpaCy",
    src: SpacyLogo,
    height: "30px",
  },
  Dask: {
    url: "https://www.dask.org/",
    title: "Dask",
    src: DaskLogo,
    height: "75px",
  },
  "SciKit-Learn": {
    url: "https://scikit-learn.org/",
    title: "SciKit-Learn",
    src: ScikitLogo,
    height: "50px",
  },
  SciPy: {
    url: "https://scipy.org/",
    title: "SciPy",
    src: ScipyLogo,
    height: "75px",
  },
  NetworkX: {
    url: "https://networkx.org/",
    title: "NetworkX",
    src: NetworkXLogo,
    height: "70px",
  },
  Gephi: {
    url: "https://gephi.org/",
    title: "Gephi",
    src: GephiLogo,
    height: "65px",
  },
  RAPIDS: {
    url: "https://rapids.ai/",
    title: "RAPIDS",
    src: RapidsLogo,
    height: "65px",
  },
  Pytorch: {
    url: "https://pytorch.org/",
    title: "Pytorch",
    src: PytorchLogo,
    height: "65px",
  },
  Tensorflow: {
    url: "https://www.tensorflow.org/",
    title: "Tensorflow",
    src: TensorflowLogo,
    height: "65px",
  },
  "OpenAI Gym": {
    url: "https://gymnasium.farama.org/#",
    title: "OpenAI Gym",
    src: GymnasiumLogo,
    height: "65px",
  },
  Neptune: {
    url: "https://neptune.ai/",
    title: "Neptune",
    src: NeptuneLogo,
    height: "90px",
  },
  Dagshub: {
    url: "https://dagshub.com/",
    title: "Dagshub",
    src: DagshubLogo,
    height: "80px",
  },
  Tableau: {
    url: "https://www.tableau.com/",
    title: "Tableau",
    src: TableauLogo,
    height: "60px",
  },
  Superset: {
    url: "https://superset.apache.org/",
    title: "Superset",
    src: SupersetLogo,
    height: "35px",
  },
  Streamlit: {
    url: "https://streamlit.io/",
    title: "Streamlit",
    src: StreamlitLogo,
    height: "70px",
  },
  Matplotlib: {
    url: "https://matplotlib.org/",
    title: "Matplotlib",
    src: MatplotlibLogo,
    height: "65px",
  },
  Plotly: {
    url: "https://plotly.com/",
    title: "Plotly",
    src: PlotlyLogo,
    height: "60px",
  },
  D3: {
    url: "https://plotly.com/",
    title: "D3",
    src: D3Logo,
    height: "60px",
  },
  "Google Cloud": {
    url: "https://cloud.google.com/?hl=en",
    title: "Google Cloud",
    src: GcloudLogo,
    height: "50px",
  },
  AWS: {
    url: "https://aws.amazon.com/",
    title: "AWS",
    src: AWSLogo,
    height: "45px",
  },
  PostgreSQL: {
    url: "https://www.postgresql.org/",
    title: "PostgreSQL",
    src: PostgresLogo,
    height: "60px",
  },
  ChromaDB: {
    url: "https://www.trychroma.com/",
    title: "ChromaDB",
    src: ChromaDBLogo,
    height: "50px",
  },
  Firebase: {
    url: "https://firebase.google.com/",
    title: "Firebase",
    src: FirebaseLogo,
    height: "60px",
  },
  MongoDB: {
    url: "https://www.mongodb.com/",
    title: "MongoDB",
    src: MongoDBLogo,
    height: "80px",
  },
  FASTAPI: {
    url: "https://fastapi.tiangolo.com/",
    title: "FASTAPI",
    src: FastAPILogo,
    height: "60px",
  },
  Django: {
    url: "https://www.djangoproject.com/",
    title: "Django",
    src: DjangoLogo,
    height: "60px",
  },
  Pandera: {
    url: "https://pandera.readthedocs.io/en/stable/index.html",
    title: "Pandera",
    src: PanderaLogo,
    height: "70px",
  },
  Prefect: {
    url: "https://www.prefect.io",
    title: "Prefect",
    src: PrefectLogo,
    height: "75px",
  },
  Airflow: {
    url: "https://airflow.apache.org/",
    title: "Airflow",
    src: AirflowLogo,
    height: "55px",
  },
  Celery: {
    url: "https://www.fullstackpython.com/celery.html",
    title: "Celery",
    src: CeleryLogo,
    height: "80px",
  },
  React: {
    url: "https://react.dev/",
    title: "React",
    src: ReactLogo,
    height: "65px",
  },
  Next: {
    url: "https://nextjs.org/",
    title: "Next",
    src: NextLogo,
    height: "65px",
  },
  MaterialUI: {
    url: "https://mui.com/",
    title: "MaterialUI",
    src: MUILogo,
    height: "70px",
  },
  Zustand: {
    url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    title: "Zustand",
    src: ZustandLogo,
    height: "80px",
  },
  Stripe: {
    url: "https://stripe.com/en-sg",
    title: "Stripe",
    src: StripeLogo,
    height: "65px",
  },
  Git: {
    url: "https://git-scm.com/",
    title: "Git",
    src: GitLogo,
    height: "70px",
  },
  "GitLab CI": {
    url: "https://about.gitlab.com/",
    title: "GitLab CI",
    src: GitlabLogo,
    height: "70px",
  },
  Scrapy: {
    url: "https://scrapy.org/",
    title: "Scrapy",
    src: ScrapyLogo,
    height: "75px",
  },
  VertexAI: {
    url: "https://cloud.google.com/generative-ai-studio?hl=en",
    title: "VertexAI",
    src: VertexAILogo,
    height: "60px",
  },
};
