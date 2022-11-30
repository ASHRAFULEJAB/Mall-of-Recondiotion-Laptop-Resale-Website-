import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AllSellerDetails = ({ seller,refetch }) => {
    const [isVerify,setIsVerify] = useState(false)
    const handleDelete = (seller) => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
          method: 'delete',
        //   headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`,
        //   },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch()
              toast.info(`Seller ${data?.name} has been deleted`)
            }
            console.log(data)
          })
  }
  // 
  const handleVerify = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'put',
        // headers: {
        //     authorization:`bearer ${localStorage.getItem('accessToken')}`
        //   }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
          if (data.modifiedCount > 0) {
              toast.success('Seller Verfied successfully')
              refetch()
        }
      })
  }
  if (seller?.role === 'Seller') {
    return (
      <tr>
        <th>1</th>
        <td>{seller?.name}</td>
        <td>{seller?.email}</td>
        <td>{seller?.role}</td>
        <td className=''>{seller?.verfiy === 'Veryfied' ? 'Veryfied' : 'Unverified'}</td>
        <td>
          <button onClick={()=>handleDelete(seller)} className='btn btn-error btn-xs'>Delete</button>
        </td>
        <td>
          <button onClick={()=>handleVerify(seller._id)} className='btn btn-sucess btn-xs'>Verify</button>
        </td>
      </tr>
    )
  }
}
export default AllSellerDetails
