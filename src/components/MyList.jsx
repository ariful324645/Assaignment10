import React from "react";

const MyList = ({ mylist }) => {
  const { title, email, location } = mylist;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Email</th>
              <th>Location</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>{title}</td>
              <td>{email}</td>

              <td>{location}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
