import React from 'react'
import * as S from "./style"
import { Grid, Typography } from '@mui/material'
import PictureFrame from '../../PictureFrame'
import GephiSample from "../../../../../assets/logos/projects/gephi-sample.png"
import NetworkSample from "../../../../../assets/logos/projects/network-sample.png"
import { StyledLink } from '../../style'


export default function SynthesisExperience2() {
  return (
    <S.SynthesisExperienceContainer>
        <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <PictureFrame
            img={GephiSample}
            caption="Gephi Sample Upload"
            style={{ maxHeight: "250px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureFrame
            caption="Social Network of Twitter (X) Accounts on Topic of Interest"
            img={NetworkSample}
            style={{ width: "300px"}}
          />
        </Grid>
      </Grid>
        <Grid container paddingTop="20px">
            <Typography>
            I developed an analytics pipeline that is able to accumulate large social networks from major social media platforms like Instagram, Facebook, and Twitter. 
            This system allows me to constructs a network of user accounts (nodes) and the people their connections to one another (weighted/unweighted). 
            <br/><br/>
            To analyze this network, I implemented a modified version of the Leiden algorithm using {" "}
            <StyledLink href="https://docs.rapids.ai/api/cugraph/stable/">RAPIDS cuGraph</StyledLink>. 
            This allowed us to identify and cluster users with similar interests and processes to deliver insights on different projects.

            One of the main accomplishments in this project was to optimise the Leiden algorithm to work without specific resolution settings, 
            enabling us to analyze large social networks without the need to manually tune hyperparameters. 
            <br/><br/>
            Because this pipeline was utilised GPU for graph analytics, it ran three times faster than existing benchmarks such as 
            <StyledLink href="https://networkx.org/">{" "}
            NetworkX
            </StyledLink>, significantly reducing the time required for analytics.
            </Typography>
        </Grid>
    </S.SynthesisExperienceContainer>
  )
}
