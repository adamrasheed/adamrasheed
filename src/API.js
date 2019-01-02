export const ConvertKit = formId => {
  const defaultformId = `815514`
  const APIKey = `U5nErI005k7uw3DR5Uvslg`
  const endPoint = `https://api.convertkit.com/v3/forms/${
    formId ? formId : defaultformId
  }/subscribe?api_key=${APIKey}`

  return endPoint
}
