export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Concepts = {
  title: string
}

export type Models = {
  title: string
  subTitle: string
  description: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  descrpition: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcon: TechIcon[]
}

export type sectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type SectionModelsProps = {
  title: string
  models: Models[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectiontech: SectionTechProps
  sectionConcepts: sectionConceptsProps
  SectionModels: SectionModelsProps
  sectionAgenda: SectionAgendaProps
}
