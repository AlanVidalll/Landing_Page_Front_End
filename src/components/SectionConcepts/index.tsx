import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'
import { sectionConceptsProps } from 'types/api'

type Props = {
  sectionConcepts: sectionConceptsProps
}
const SectionConcepts = ({ sectionConcepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts.title}</Heading>
      <S.List>
        {sectionConcepts.concepts.map((item) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
