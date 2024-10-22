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
import SpacyLogo from "../../assets/logos/data_science/spacy.png";
import KedroLogo from "../../assets/logos/data_science/kedro.png";

import AWSLogo from "../../assets/logos/cloud_databases/aws.png";
import GcloudLogo from "../../assets/logos/cloud_databases/gcloud.png";
import MongoDBLogo from "../../assets/logos/cloud_databases/mongodb.png";
import PostgresLogo from "../../assets/logos/cloud_databases/postgres.png";
import FirebaseLogo from "../../assets/logos/cloud_databases/firebase.png";
import ChromaDBLogo from "../../assets/logos/cloud_databases/chroma.png";

// import PytorchLogo from "../../assets/logos/ai_machine_learning/pytorch.png";
import DagshubLogo from "../../assets/logos/ai_machine_learning/dagshub.png";
import HuggingFaceLogo from "../../assets/logos/ai_machine_learning/huggingface.png";
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
import DatahubLogo from "../../assets/logos/others/datahub.png";
import JiraLogo from "../../assets/logos/others/jira.png";
import DockerLogo from "../../assets/logos/others/docker.png";
import VertexAILogo from "../../assets/logos/misc/vertex.png";

export const Logos: {
  [key: string]: { url: string; title: string; src: any };
} = {
  Python: {
    url: "https://www.python.org/",
    title: "Python",
    src: PythonLogo,
  },
  R: {
    url: "https://www.r-project.org/",
    title: "R",
    src: RLogo,
  },
  SQL: {
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "SQL",
    src: SQLLogo,
  },
  Typescript: {
    url: "https://www.typescriptlang.org/",
    title: "Typescript",
    src: TSLogo,
  },
  HTML5: {
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    title: "HTML5",
    src: HTMLLogo,
  },
  CSS: {
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS",
    src: CSSLogo,
  },
  Spacy: {
    url: "https://spacy.io/",
    title: "SpaCy",
    src: SpacyLogo,
  },
  Kedro: {
    url: "https://kedro.org/",
    title: "Kedro",
    src: KedroLogo,
  },
  Dask: {
    url: "https://www.dask.org/",
    title: "Dask",
    src: DaskLogo,
  },
  "SciKit-Learn": {
    url: "https://scikit-learn.org/",
    title: "SciKit-Learn",
    src: ScikitLogo,
  },
  SciPy: {
    url: "https://scipy.org/",
    title: "SciPy",
    src: ScipyLogo,
  },
  NetworkX: {
    url: "https://networkx.org/",
    title: "NetworkX",
    src: NetworkXLogo,
  },
  Gephi: {
    url: "https://gephi.org/",
    title: "Gephi",
    src: GephiLogo,
  },
  RAPIDS: {
    url: "https://rapids.ai/",
    title: "RAPIDS",
    src: RapidsLogo,
  },
  HuggingFace: {
    url: "https://huggingface.co/",
    title: "HuggingFace",
    src: HuggingFaceLogo,
  },
  // Pytorch: {
  //   url: "https://pytorch.org/",
  //   title: "Pytorch",
  //   src: PytorchLogo,
  // },
  Tensorflow: {
    url: "https://www.tensorflow.org/",
    title: "Tensorflow",
    src: TensorflowLogo,
  },
  "OpenAI Gym": {
    url: "https://gymnasium.farama.org/#",
    title: "Gymnasium",
    src: GymnasiumLogo,
  },
  Neptune: {
    url: "https://neptune.ai/",
    title: "Neptune",
    src: NeptuneLogo,
  },
  Dagshub: {
    url: "https://dagshub.com/",
    title: "Dagshub",
    src: DagshubLogo,
  },
  Tableau: {
    url: "https://www.tableau.com/",
    title: "Tableau",
    src: TableauLogo,
  },
  Superset: {
    url: "https://superset.apache.org/",
    title: "Superset",
    src: SupersetLogo,
  },
  Streamlit: {
    url: "https://streamlit.io/",
    title: "Streamlit",
    src: StreamlitLogo,
  },
  Matplotlib: {
    url: "https://matplotlib.org/",
    title: "Matplotlib",
    src: MatplotlibLogo,
  },
  Plotly: {
    url: "https://plotly.com/",
    title: "Plotly",
    src: PlotlyLogo,
  },
  D3: {
    url: "https://plotly.com/",
    title: "D3",
    src: D3Logo,
  },
  "Google Cloud": {
    url: "https://cloud.google.com/?hl=en",
    title: "GCloud",
    src: GcloudLogo,
  },
  AWS: {
    url: "https://aws.amazon.com/",
    title: "AWS",
    src: AWSLogo,
  },
  PostgreSQL: {
    url: "https://www.postgresql.org/",
    title: "PostgreSQL",
    src: PostgresLogo,
  },
  ChromaDB: {
    url: "https://www.trychroma.com/",
    title: "ChromaDB",
    src: ChromaDBLogo,
  },
  Firebase: {
    url: "https://firebase.google.com/",
    title: "Firebase",
    src: FirebaseLogo,
  },
  MongoDB: {
    url: "https://www.mongodb.com/",
    title: "MongoDB",
    src: MongoDBLogo,
  },
  FASTAPI: {
    url: "https://fastapi.tiangolo.com/",
    title: "FASTAPI",
    src: FastAPILogo,
  },
  Django: {
    url: "https://www.djangoproject.com/",
    title: "Django",
    src: DjangoLogo,
  },
  Pandera: {
    url: "https://pandera.readthedocs.io/en/stable/index.html",
    title: "Pandera",
    src: PanderaLogo,
  },
  Prefect: {
    url: "https://www.prefect.io",
    title: "Prefect",
    src: PrefectLogo,
  },
  Airflow: {
    url: "https://airflow.apache.org/",
    title: "Airflow",
    src: AirflowLogo,
  },
  Celery: {
    url: "https://www.fullstackpython.com/celery.html",
    title: "Celery",
    src: CeleryLogo,
  },
  React: {
    url: "https://react.dev/",
    title: "React",
    src: ReactLogo,
  },
  Next: {
    url: "https://nextjs.org/",
    title: "Next",
    src: NextLogo,
  },
  MaterialUI: {
    url: "https://mui.com/",
    title: "MaterialUI",
    src: MUILogo,
  },
  Zustand: {
    url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    title: "Zustand",
    src: ZustandLogo,
  },
  Stripe: {
    url: "https://stripe.com/en-sg",
    title: "Stripe",
    src: StripeLogo,
  },
  Docker: {
    url: "https://www.docker.com/",
    title: "Docker",
    src: DockerLogo,
  },
  Git: {
    url: "https://git-scm.com/",
    title: "Git",
    src: GitLogo,
  },
  "GitLab CI": {
    url: "https://about.gitlab.com/",
    title: "GitLab CI",
    src: GitlabLogo,
  },
  Scrapy: {
    url: "https://scrapy.org/",
    title: "Scrapy",
    src: ScrapyLogo,
  },
  VertexAI: {
    url: "https://cloud.google.com/generative-ai-studio?hl=en",
    title: "VertexAI",
    src: VertexAILogo,
  },
  Datahub: {
    url: "https://datahubproject.io/",
    title: "DataHub",
    src: DatahubLogo,
  },
  Jira: {
    url: "https://www.atlassian.com/",
    title: "Jira",
    src: JiraLogo,
  },
};
