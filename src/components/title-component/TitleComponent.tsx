import './TitleComponent.css'

interface propTitleComponent {
  text: String
}

export const TitleComponent = (propTitle: propTitleComponent) => {
  return (
    <h1 className="title-component">{propTitle.text}</h1>
  )
}