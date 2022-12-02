import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ReportedDetails from './ReportedDetails'

const ReportedItems = () => {
  const url =
    'https://mall-of-recondition-laptops-server.vercel.app/reportAdmin'
  const { data: reported = [], refetch } = useQuery({
    queryKey: ['reported'],
    queryFn: async () => {
      const res = await fetch(url, {
       
      })
      const data = await res.json()
      return data
    },
  })

  return (
    <div>
      <h1 className='text-center font-bold text-6xl mt-3'>Reported Items</h1>
      <div className='bg-white p-8 rounded-md w-full mt-36'>
        <div className=' flex items-center justify-between pb-6'></div>
        <div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Name
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Location
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Created at
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Price
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reported.map((report) => (
                    <ReportedDetails
                      key={report._id}
                      report={report}
                      refetch={refetch}
                    ></ReportedDetails>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportedItems
