import React from 'react'
import toast from 'react-hot-toast'

const AllBuyerDetails = ({ buyer, refetch }) => {
    const handleDelete = (buyer) => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
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
  console.log(buyer)
  if (buyer?.role === 'Buyer') {
    return (
      <tr>
        <th>1</th>
        <td>{buyer?.name}</td>
        <td>{buyer?.email}</td>
            <td>{buyer?.role}</td>
            <td><button onClick={()=>handleDelete(buyer)} className="btn btn-error btn-xs">Delete</button></td>
      </tr>
    )
  }
}

export default AllBuyerDetails
