import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import * as S from './styles'

import { SectionModelsProps } from 'types/api'

type Props = {
  SectionModels: SectionModelsProps
}
const SectionModules = ({ SectionModels }: Props) => (
  <Container>
    <Heading reverseColor>{SectionModels.title}</Heading>

    <S.Content>
      {SectionModels.models.map((iten, index) => (
        <CardModule key={index} title={iten.title} subTitle={iten.subTitle}>
          <div dangerouslySetInnerHTML={{ __html: iten.description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
