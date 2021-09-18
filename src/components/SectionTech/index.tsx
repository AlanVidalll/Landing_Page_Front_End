import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionTech: SectionTechProps
}

const SectionTech = ({ sectionTech }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionTech.title}</Heading>
      <S.IconsContainer>
        {sectionTech.techIcon.map((iten) => (
          <S.Icon key={iten.title}>
            <S.Icons
              src={getImageUrl(iten.icon.url)}
              alt={'teste'}
              loading="lazy"
            />
            <S.IconsName>{iten.title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
