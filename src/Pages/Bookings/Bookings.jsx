import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:3000/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);

            })

    }, [url])

    const handleDelete = id => {
        const proceed = confirm('R u sure to delete?');
        if (proceed) {
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted sucess');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.filter(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining];
                    setBookings(newBooking);
                }
            })
    }

    return (
        <div>
            <h2>Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th></th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;