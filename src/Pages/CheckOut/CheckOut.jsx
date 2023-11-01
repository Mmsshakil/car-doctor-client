import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    const service = useLoaderData();
    const { title, price, service_id } = service;

    return (
        <div>

            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Order Confirm" className="btn btn-outline btn-accent" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;