import React from "react";
import * as S from "./style";
import { Grid, Typography } from "@mui/material";
import CSSLogo from "../../../assets/logos/programming_languages/css3.png";
import HTMLLogo from "../../../assets/logos/programming_languages/html5.png";
import PythonLogo from "../../../assets/logos/programming_languages/python.png";
import RLogo from "../../../assets/logos/programming_languages/r.png";
import TSLogo from "../../../assets/logos/programming_languages/ts.png";
import DaskLogo from "../../../assets/logos/data_science/dask.png";
import GephiLogo from "../../../assets/logos/data_science/gephi.png";
import ScikitLogo from "../../../assets/logos/data_science/scikit.png";
import ScipyLogo from "../../../assets/logos/data_science/scipy.png";
import NetworkXLogo from "../../../assets/logos/data_science/networkx.png";
import PandasLogo from "../../../assets/logos/data_science/pandas.png";
import PytorchLogo from "../../../assets/logos/ai_machine_learning/pytorch.png";
import DagshubLogo from "../../../assets/logos/ai_machine_learning/dagshub.png";
import TensorflowLogo from "../../../assets/logos/ai_machine_learning/tensorflow.png";
import GymnasiumLogo from "../../../assets/logos/ai_machine_learning/gymnasium.png";
import RapidsLogo from "../../../assets/logos/ai_machine_learning/nvidiarapids.png";
import Image from "../../../components/Image";

export default function Skillset() {
  return (
    <Grid container sx={{ padding: 10 }}>
      <Grid container>
        <S.TitleWrapper variant="h2" sx={{ paddingBottom: 5 }}>
          {" "}
          Skills{" "}
        </S.TitleWrapper>
      </Grid>
      <Grid container display="flex" spacing={5}>
        <Grid item xs={6}>
          <S.SubTitleWrapper>Programming Languages</S.SubTitleWrapper>
          <S.LogoWrapper>
            <Image
              url="https://www.python.org/"
              title="Python"
              src={PythonLogo}
              height="75px"
            />
            <Image
              url="https://www.r-project.org/"
              title="R"
              src={RLogo}
              height="80px"
            />
            <Image
              url="https://www.typescriptlang.org/"
              title="Typescript"
              src={TSLogo}
              height="70px"
            />
            <Image
              url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              title="HTML5"
              src={HTMLLogo}
              height="70px"
            />
            <Image
              url="https://developer.mozilla.org/en-US/docs/Web/CSS"
              title="CSS"
              src={CSSLogo}
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
              src={PandasLogo}
              height="75px"
            />
            <Image
              url="https://www.dask.org/"
              title="Dask"
              src={DaskLogo}
              height="75px"
            />
            <Image
              url="https://scikit-learn.org/"
              title="SciKit-Learn"
              src={ScikitLogo}
              width="80px"
            />
            <Image
              url="https://scipy.org/"
              title="SciPy"
              src={ScipyLogo}
              height="80px"
            />
            <Image
              url="https://networkx.org/"
              title="NetworkX"
              src={NetworkXLogo}
              height="70px"
            />
            <Image
              url="https://gephi.org/"
              title="Gephi"
              src={GephiLogo}
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
              src={RapidsLogo}
              width="70px"
            />
            <Image
              url="https://pytorch.org/"
              title="Pytorch"
              src={PytorchLogo}
              height="65px"
            />
            <Image
              url="https://www.tensorflow.org/"
              title="Tensorflow"
              src={TensorflowLogo}
              height="65px"
            />
            <Image
              url="https://gymnasium.farama.org/#"
              title="OpenAI Gym"
              src={GymnasiumLogo}
              height="65px"
            />
            <Image
              url="https://dagshub.com/"
              title="Dagshub"
              src={DagshubLogo}
              height="80px"
            />
          </S.LogoWrapper>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Grid>
  );
}
