const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

export function getApiExchange() {
  return (
    fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(
            `${response.status} - ${response.statusText}`
          );
        }

        return response.json()
      })
  )
}
