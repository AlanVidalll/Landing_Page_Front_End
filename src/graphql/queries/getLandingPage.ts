const GET_LANDING_PAGE = /*GraphQL*/ `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    descrpition
    image {
      alternativeText
      url
    }
  }
}

fragment sectionTech on LandingPage {
  sectiontech {
    title
    techIcon {
      title
      icon {
        url
      }
    }
  }
}
fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModels on LandingPage {
  SectionModels {
    title
    models {
      title
      subTitle
      description
    }
  }
}
fragment sectionAgenda on LandingPage{
sectionAgenda{
  title
  description
}
}
query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModels
    ...sectionAgenda
  }
}
`

export default GET_LANDING_PAGE
