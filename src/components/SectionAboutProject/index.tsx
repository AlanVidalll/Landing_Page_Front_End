import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  aboutProject: SectionAboutProjectProps
}

const SectionAboutProject = ({ aboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(aboutProject.image.url)}
          alt={aboutProject.image.alternativeText}
        />
        <div>
          <Heading>{aboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: aboutProject.descrpition }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
