import { useState, useEffect } from 'react'
import { Bank } from '../interfaces/interfaces'
import { getBanks } from '../Service/service'

export const useData = ({url = ""}) => {
  const [data, setData] = useState<Bank[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    getBanks(url).then(data => {
      setData(
        data.map((bank: Bank) => {
          return {
            description: bank.description,
            age: bank.age,
            url: bank.url,
            bankName: bank.bankName
          }

        })
      )
    }).catch(e => {
      setError(true)
    }).finally(() => {setLoading(false)})
  }, [])

  return{
    data,error,loading
  }
}