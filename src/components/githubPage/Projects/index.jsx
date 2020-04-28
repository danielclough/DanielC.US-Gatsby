import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from '../../common';
import StarIcon from '../../../svg/icons/star.svg';
import ForkIcon from '../../../svg/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <StarIcon />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <ForkIcon />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
