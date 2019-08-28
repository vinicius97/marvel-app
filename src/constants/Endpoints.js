export const BaseURL = process.env.REACT_APP_BASE_URL

export const character = (id) => (
  {
    list: `${BaseURL}/characters`,
    series: `${BaseURL}/characters/${id}/series`
  }
)
