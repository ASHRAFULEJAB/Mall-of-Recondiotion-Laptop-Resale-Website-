import React from 'react'
import toast from 'react-hot-toast'

const AllSellerDetails = ({ seller,refetch }) => {
    
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
  if (seller?.role === 'Seller') {
    return (
      <tr>
        <th>1</th>
        <td>{seller?.name}</td>
        <td>{seller?.email}</td>
        <td>{seller?.role}</td>
        <td>
          <button onClick={()=>handleDelete(seller)} className='btn btn-error btn-xs'>Delete</button>
        </td>
      </tr>
    )
  }
}
export default AllSellerDetails
