export const BaseURL = process.env.REACT_APP_BASE_URL

export const characters = (id) => (
  {
    character: {
      list: `${BaseURL}/characters`,
      series: `${BaseURL}/characters/${id}/series`
    }
  }
)
